import styled from "styled-components";
import { Translator } from "../Translation";
import SurgeryInstructionItem from "./SurgeryInstructionItem";
import { userContext } from "../../providers/UserProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import white_v from "../../assets/Icons/white_v.svg";
import instructionsIcons from "../../assets/Icons/PersonalInstructions";
import postAnalytics from "../../utilities/postAnalytics";

const surgeryInstructionsItems = {
  fever: {
    icon: instructionsIcons.fever,
    paragraphs: ["Surgery-Instruction-Fever"],
  },
  medicalCondition: {
    icon: instructionsIcons.medicalCondition,
    paragraphs: ["Surgery-Instruction-Medical-Condition"],
  },
  feast: {
    icon: instructionsIcons.feast,
    paragraphs: [
      "Surgery-Instruction-Feast-6-Hours",
      "Surgery-Instruction-Feast-4-Hours",
      "Surgery-Instruction-Feast-1-Hours-Max",
      "Surgery-Instruction-Feast-1-Hours",
    ],
  },
};

function SurgeryInstructions() {
  const userInfo = useContext(userContext);
  const { userId } = useParams();
  const { age } = userInfo.Case;
  if (age === "0-2")
    surgeryInstructionsItems.feast.paragraphs.splice(
      2,
      0,
      "Surgery-Instruction-Feast-3-Hours"
    );
  const handleApproveClick = () => {
    postAnalytics({
      userId,
      type: `Instructions-signedConfirmation`,
    });
  };

  return (
    <Container>
      <Title>
        <Translator>instructions-title</Translator>
      </Title>

      <ListContainer>
        {Object.values(surgeryInstructionsItems).map((surgeryInstruction) => (
          <>
            <SurgeryInstructionItem {...surgeryInstruction} />
            <Divider />
          </>
        ))}
      </ListContainer>

      <Button onClick={handleApproveClick}>
        <Label>
          <Vcheck />
          <CheckBoxText>
            <Translator>SurgeryInstructions-approveButton</Translator>
          </CheckBoxText>
          <Input />
        </Label>
      </Button>

      <SignedText>
        <Translator>תודה! אישור התקבל בהצלחה</Translator>
      </SignedText>
    </Container>
  );
}

export default SurgeryInstructions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.375rem;
`;

const ListContainer = styled.div`
  margin-block: 2rem;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #aabdf1;
  margin-block: 1.5rem;
  &:last-of-type {
    display: none;
  }
`;

const SignedText = styled.p`
  transition: opacity 200ms linear;
  align-self: center;
  margin-block-start: 0.6875rem;
  margin-block-end: 1.25rem;
  margin-inline: 0;
  font-weight: 500;
  font-size: 1.125rem;
  opacity: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input.attrs({
  type: "radio",
  name: "signedConfirmation",
})`
  display: none;
`;

const Button = styled.button`
  --content-height: 1.625rem;
  cursor: pointer;
  width: 12rem;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.6875rem;
  padding-inline: 1rem;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
  &:has(> ${Label} > ${Input}:checked) + ${SignedText} {
    opacity: 1;
  }
`;

const CheckBoxText = styled.div`
  color: #fff;
  font-size: 1.25rem;
  line-height: var(--content-height);
  &:has(~ ${Input}:checked) {
    display: none;
  }
`;

const Vcheck = styled.img.attrs({
  src: white_v,
  alt: "V",
})`
  width: 1.25rem;
  height: var(--content-height);
  display: none;
  &:has(~ ${Input}:checked) {
    display: block;
  }
`;
