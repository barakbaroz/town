import { useRef, useState } from "react";
import styled from "styled-components";
import GisterHeader from "../components/Gister/GisterHeader";
import GisterStep from "../components/Gister/GisterStep";
import PatientInformation from "../components/Gister/PatientInformation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DuplicatePopUp from "../components/Gister/DuplicatePopUp";
import MedicalConcentrate from "../components/Panel/MedicalConcentrate";
import Scheduler from "../components/Gister/Scheduler";
import { today } from "@internationalized/date";

export default function Gister() {
  const navigate = useNavigate();
  const casesDataRef = useRef({});
  const [loading, setLoading] = useState(false);
  const [showDuplicatePopup, setShowDuplicatePopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkMissingFields = (data) => {
    let anyMissing = false;
    for (const [key, test] of Object.entries(validatorFullFeilds)) {
      if (!test(data)) continue;
      anyMissing = true;
      document.getElementById(key)?.classList.add("invalid");
    }
    return anyMissing;
  };

  const createCase = () => {
    setLoading(true);
    return axios
      .post("/api/cases/create", casesDataRef.current)
      .then(() => navigate("/panel"))
      .finally(() => setLoading(false));
  };

  const checkDuplicate = ({ data }) => {
    if (data === "none") return createCase();
    if (data === "duplicate") return setShowDuplicatePopup(true);
  };

  const handleSubmit = () => {
    const data = casesDataRef.current;
    const errorFields = checkMissingFields(data);
    if (errorFields)
      return setErrorMessage(
        "Incorrect data / missing data - please check again to proceed"
      );
    setLoading(true);
    axios
      .post("/api/cases/duplicate", data)
      .then(checkDuplicate)
      .finally(() => setLoading(false));
  };

  return (
    <GisterContainer>
      <DuplicatePopUp
        onConfirm={createCase}
        onCancel={() => setShowDuplicatePopup(false)}
        open={showDuplicatePopup}
        loading={loading}
      />
      <GisterHeader text="Endoscopy Patient`s Guidance System" />
      <Container>
        <CasesDetails>
          <GisterStep stepNumber="01" title="Patient’s Personal information">
            <PatientInformation casesDataRef={casesDataRef} />
          </GisterStep>
          <GisterStep stepNumber="02" title="Type of laxative solution">
            <MedicalConcentrate casesDataRef={casesDataRef} />
          </GisterStep>
          <GisterStep stepNumber="03" title="Procedure details">
            <Scheduler casesDataRef={casesDataRef} />
          </GisterStep>
        </CasesDetails>
        <ButtonContainer>
          <Error>{errorMessage}</Error>
          <SubmitButton disabled={loading} onClick={handleSubmit}>
            Send
          </SubmitButton>
        </ButtonContainer>
      </Container>
    </GisterContainer>
  );
}

const validatorFullFeilds = {
  yearOfBirth: ({ yearOfBirth }) => yearOfBirth?.length !== 4,
  concentrate: ({ concentrate }) => !concentrate,
  date: ({ date }) => !date || date.toDate() < today().toDate(),
  time: ({ time }) => !time,
  contacts: ({ phoneNumber, email }) => {
    if (!phoneNumber && !email) return true;
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) return true;
    if (email && !/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return true;
    return false;
  },
};

const GisterContainer = styled.div`
  --invalid: #f02a4c;
  min-height: 100vh;
  font-family: "Abraham";
`;

const Error = styled.p`
  font-size: 1.25rem;
  color: #f02a4c;
  visibility: hidden;
  &::before {
    content: "*";
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-block-start: 55px;
  &:has(.invalid) {
    ${Error} {
      visibility: visible;
    }
  }
`;

const CasesDetails = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-evenly;
  width: 100%;
  gap: 4rem;
`;

const SubmitButton = styled.button`
  width: fit-content;
  background: #f02a4c;
  border-radius: 27px;
  padding-block: 0.688rem;
  padding-inline: 3.125rem;
  border: none;
  color: white;
  font-family: inherit;
  font-size: 1.188rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
