import { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FieldTitle } from "./Giser.styled";

function Symptoms({ casesDataRef }) {
  const symptomsRef = useRef(null);

  const handleSelect = () => {
    const formData = new FormData(symptomsRef.current);
    casesDataRef.current.symptoms = [...formData.keys()];
  };

  return (
    <div>
      <FieldTitle>האם המטופל סובל מסיפטומים?</FieldTitle>
      <SymptomsList ref={symptomsRef}>
        {data.map(({ key, name }) => (
          <Symptom key={key}>
            {name}
            <Input name={key} onChange={handleSelect} />
          </Symptom>
        ))}
      </SymptomsList>
    </div>
  );
}

Symptoms.propTypes = {
  casesDataRef: PropTypes.shape({ current: PropTypes.object }),
};

const data = [
  {
    key: "shortness_of_breath",
    name: "קוצר נשימה",
  },
  {
    key: "edema",
    name: "בצקת",
  },
  {
    key: "chest_pain",
    name: "כאבים בחזה",
  },
];

export default Symptoms;

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const SymptomsList = styled.form`
  display: flex;
  gap: 12px;
`;

const Symptom = styled.label`
  padding-block: 5px;
  padding-inline: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 200ms linear;
  &:has(${Input}:checked) {
    border-color: transparent;
    background: #84a4fb;
    color: #fff;
  }
`;
