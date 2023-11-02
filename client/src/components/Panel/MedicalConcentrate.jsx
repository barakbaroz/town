import styled from "styled-components";
import PropTypes from "prop-types";
import moviprep from "../../assets/Gister/moviprep.svg";
import picolax from "../../assets/Gister/picolax.svg";
import meroken from "../../assets/Gister/meroken.svg";
import checkmark from "../../assets/Gister/checkmark.svg";
import { useState } from "react";

export default function MedicalConcentrate({ casesDataRef }) {
  const [checkedUnknown, setCheckUnknown] = useState(false);
  const handleSelect = (event) => {
    if (event.target.value === "unknown") setCheckUnknown(true);
    else setCheckUnknown(false);
    casesDataRef.current.concentrate = event.target.value;
  };

  return (
    <Container>
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
      <Label key="unknown">
        <Flex>
          <Circle id="Circle" redColor={checkedUnknown}>
            <CheckmarkUnknown show={checkedUnknown} />
          </Circle>
          <UnknownText>לא ידוע</UnknownText>
        </Flex>
        <Input
          name="MedicalConcentrate"
          value="unknown"
          onChange={handleSelect}
        />
      </Label>
    </Container>
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
const CheckmarkUnknown = styled.img.attrs({ src: checkmark })`
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  margin-block-end: 40px;
  margin-block-start: 0;
`;
const UnknownText = styled.p`
  text-align: start;
  font-size: 1.25rem;
  margin: 0;
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
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: border 250ms ease-in;
  border: 1px solid ${({ redColor }) => (redColor ? "#F02A4C" : "black")};
  display: flex;
  align-items: start;
  justify-content: center;
  margin-bottom: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;
