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

export default function Gister() {
  const navigate = useNavigate();
  const casesDataRef = useRef({});
  const [loading, setLoading] = useState(false);
  const [showDuplicatePopup, setShowDuplicatePopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDate = () => {
    if (casesDataRef.current.date.year < 100)
      casesDataRef.current.date.year += 2000;
    casesDataRef.current.date = casesDataRef.current.date.toDate();
  };

  const checkMissingFields = (data) => {
    let anyMissing = false;
    for (const [key, test] of Object.entries(validatorFullFeilds)) {
      const missing = test(data);
      if (!missing) continue;
      anyMissing ||= missing;
      document.getElementById(key)?.classList.add("invalid");
    }
    return anyMissing;
  };

  const checkErrorMessage = (data) => {
    const resultObject = {
      missing: checkMissingFields(data),
      pastDate: isPastDate(data),
    };
    const message = ["missing", "pastDate"]
      .filter((name) => resultObject[name])
      .map((name) => errorTitles[name])
      .join(" וכן ");
    setErrorMessage(message);
    return Boolean(message);
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
    const errorFields = checkErrorMessage(data);
    if (errorFields) return;
    handleDate();
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
          <ErrorTitle>{errorMessage}</ErrorTitle>
          <SubmitButton disabled={loading} onClick={handleSubmit}>
            Send
          </SubmitButton>
        </ButtonContainer>
      </Container>
    </GisterContainer>
  );
}

const isPastDate = ({ date }) => {
  const result = new Date(date) < new Date();
  if (result) document.getElementById("date")?.classList.add("invalid");
  return result;
};

const validatorFullFeilds = {
  socialSecurityNumber: ({ socialSecurityNumber }) =>
    socialSecurityNumber?.length !== 4,
  phoneNumber: ({ phoneNumber }) => !/^\d{10}$/.test(phoneNumber),
  concentrate: ({ concentrate }) => !concentrate,
  date: ({ date }) => !date,
  time: ({ time }) => !time,
};

const errorTitles = {
  missing: "חסרים נתונים להמשך תהליך",
  pastDate: "הוזן תאריך עבר",
};

const GisterContainer = styled.div`
  --invalid: #f02a4c;
  width: 100vw;
  min-height: 100vh;
  font-family: "Abraham";
`;

const ErrorTitle = styled.p`
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
    ${ErrorTitle} {
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
