import styled from "styled-components";
import PropTypes from "prop-types";
import powder from "../../assets/Gister/powder.svg";
// import pill from "../../assets/Gister/pill.svg";
import liquid from "../../assets/Gister/liquid.svg";
import checkmark from "../../assets/Gister/checkmark.svg";

export default function MedicalConcentrate({ casesDataRef }) {
  const handleSelect = (event) => {
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
    </Container>
  );
}

MedicalConcentrate.propTypes = {
  casesDataRef: PropTypes.object,
};

const data = [
  { key: "moviprep", name: "Moviprep", src: powder },
  { key: "colyte", name: "Colyte", src: liquid },
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
  margin-block-end: 40px;
  margin-block-start: 0;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
