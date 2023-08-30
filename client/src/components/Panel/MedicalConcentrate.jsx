import styled from "styled-components";
import PropTypes from "prop-types";
import moviprep from "../../assets/Gister/moviprep.svg";
import picolax from "../../assets/Gister/picolax.svg";
import meroken from "../../assets/Gister/meroken.svg";
import checkmark from "../../assets/Gister/checkmark.svg";

export default function MedicalConcentrate({ casesDataRef }) {
  const handleSelect = (event) => {
    casesDataRef.current.concentrate = event.target.value;
  };
  return (
    <Wrapper id="concentrate">
      {data.map(({ key, src, name }) => (
        <Label key={key}>
          <Img src={src} />
          <Checkmark />
          <Text>{name}</Text>
          <Input
            name="MedicalConcentrate"
            value={key}
            onChange={handleSelect}
          />
        </Label>
      ))}
    </Wrapper>
  );
}

MedicalConcentrate.propTypes = {
  casesDataRef: PropTypes.object,
};

const data = [
  { key: "moviprep", name: "מוביפרפ", src: moviprep },
  { key: "picolax", name: "פיקולקס", src: picolax },
  { key: "meroken", name: "מרוקן", src: meroken },
];

const Input = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const Img = styled.img`
  border-radius: 15px;
  transition: all 200ms linear;
  &:has(~ ${Input}:checked) {
    filter: brightness(0.8);
  }
`;

const Checkmark = styled.img.attrs({ src: checkmark })`
  position: absolute;
  top: 12px;
  right: 12px;
  &:not(:has(~ ${Input}:checked)) {
    display: none;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;
