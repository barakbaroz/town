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

function Gister() {
  const navigate = useNavigate();
  const casesDataRef = useRef({ language: "he" });
  const [loading, setLoading] = useState(false);
  const [showDuplicatePopup, setShowDuplicatePopup] = useState(false);

  const checkMissingFields = (data) => {
    let missing = false;
    for (const [key, test] of Object.entries(validator)) {
      if (test(data)) continue;
      const el = document.getElementById(key);
      if (el) el.classList.add("invalid");
      missing = true;
    }
    return missing;
  };

  const createCase = () => {
    setLoading(true);
    return axios
      .post("/api/cases/create", casesDataRef.current)
      .then(() => navigate("/panel"))
      .finally(() => setLoading(false));
  };

  const duplicate = ({ data }) => {
    if (data === "none") return createCase();
    if (data === "duplicate") return setShowDuplicatePopup(true);
  };

  const handleSubmit = () => {
    const data = casesDataRef.current;
    const missingFields = checkMissingFields(data);
    if (missingFields) return;
    setLoading(true);
    axios
      .post("/api/cases/duplicate", data)
      .then(duplicate)
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
      <GisterHeader text="מערכת ליווי והדרכת מטופלים לקולונוסקופיה" />
      <Container>
        <CasesDetails>
          <GisterStep stepNumber="01" title="פרטי מטופל ויצירת קשר">
            <PatientInformation casesDataRef={casesDataRef} />
          </GisterStep>
          <GisterStep stepNumber="02" title="בחירת סוג התמיסה למטופל">
            <MedicalConcentrate casesDataRef={casesDataRef} />
          </GisterStep>
          <GisterStep stepNumber="03" title="קביעת תאריך ושעה לבדיקה">
            <Scheduler casesDataRef={casesDataRef} />
          </GisterStep>
        </CasesDetails>
        <ButtonContainer>
          <ErrorTitle>* חסרים נתונים להמשך תהליך</ErrorTitle>
          <SubmitButton disabled={loading} onClick={handleSubmit}>
            שליחה
          </SubmitButton>
        </ButtonContainer>
      </Container>
    </GisterContainer>
  );
}

export default Gister;

const validator = {
  zehutNumber: ({ zehutNumber }) => zehutNumber?.length === 4,
  phoneNumber: ({ phoneNumber }) => /^\d{10}$/.test(phoneNumber),
  yearOfBirth: ({ yearOfBirth }) => yearOfBirth?.length === 4,
};

const GisterContainer = styled.div`
  --invalid: #f02a4c;
  width: 100vw;
  min-height: 100vh;
  direction: rtl;
  font-family: "Abraham";
`;

const ErrorTitle = styled.p`
  font-size: 1.25rem;
  color: #f02a4c;
  visibility: hidden;
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
