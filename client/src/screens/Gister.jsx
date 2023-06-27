import { useRef, useState } from "react";
import styled from "styled-components";
import CoordinatorHeader from "../components/CoordinatorHeader";
import GisterStep from "../components/Gister/GisterStep";
import PatientInformation from "../components/Gister/PatientInformation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DateSelector from "../components/Gister/DateSelector";

function Gister() {
  const navigate = useNavigate();
  const casesDataRef = useRef({});
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    if (data === "duplicate") return console.log("duplicate");
  };

  const handleSubmit = () => {
    const data = casesDataRef.current;
    const missingFields = checkMissingFields(data);
    if (missingFields) return setIsError(true);
    setIsError(false);
    setLoading(true);
    axios
      .post("/api/cases/duplicate", data)
      .then(duplicate)
      .finally(() => setLoading(false));
  };

  const handleDateSelect = (operationType, date) =>
    (casesDataRef.current[operationType] = date.toDate());

  return (
    <GisterContainer>
      <CoordinatorHeader text="מערכת ליווי והדרכת מטופלים לטרום ניתוח" />
      <Container>
        <Flex>
          <GisterStep stepNumber="01" title="פרטי מטופל ויצירת קשר">
            <PatientInformation casesDataRef={casesDataRef} />
          </GisterStep>
          <GisterStep
            stepNumber="02"
            title="הזנת תאריכי טרום ניתוח  (*תאריך ניתוח אופציונלי)"
          >
            <DateSelector onChange={handleDateSelect} label="label" />
          </GisterStep>
        </Flex>
        <div>
          <ErrorTitle show={isError}>* חסרים נתונים להמשך תהליך</ErrorTitle>
          <SubmitButton disabled={loading} onClick={handleSubmit}>
            שליחה
          </SubmitButton>
        </div>
      </Container>
    </GisterContainer>
  );
}

export default Gister;

const validator = {
  zehutNumber: (data) => data.zehutNumber?.length === 4,
  phoneNumber: (data) => /^\d{10}$/.test(data),
  preSurgery: (data) => Boolean(data),
};

const GisterContainer = styled.div`
  --invalid: 1px solid #f02a4c;
  width: 100vw;
  height: 100vh;
  direction: rtl;
  font-family: "Abraham";
`;

const Container = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  padding-block-start: 4%;
  box-sizing: border-box;
  justify-content: space-evenly;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: fit-content;
  background: #f02a4c;
  border-radius: 27px;
  padding: 0.5rem 3rem;
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

const ErrorTitle = styled.p`
  font-size: 1.25rem;
  color: #f02a4c;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;
