import { Fragment } from "react";
import styled from "styled-components";
import { Translator } from "../Translation";
import { useUser } from "../../providers/UserProvider";
import { useLanguage } from "../../providers/LanguageProvider";

const DateOnly = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const DateAndTime = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export default function InstructionsSteps() {
  const { Case } = useUser();
  const { language } = useLanguage();

  return (
    <Container>
      {data[Case.concentrate].map(({ getDate, content, options }, index) => (
        <Fragment key={content}>
          <Bullet />
          <StepDetails>
            {getDate(Case)
              .toLocaleString(`${language}-US`, options)
              .replaceAll(",", " |")}
          </StepDetails>
          <DottedLine last={index === data[Case.concentrate].length - 1} />
          <DescriptionText>
            <Translator>Instructions-Steps-{content}</Translator>
          </DescriptionText>
        </Fragment>
      ))}
    </Container>
  );
}

const instructions = {
  fiberDiet: {
    content: "fiber-diet",
    options: DateOnly,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setDate(result.getDate() - 2);
      return result;
    },
  },
  fluidsOnly: {
    content: "fluids-only",
    options: DateAndTime,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setDate(result.getDate() - 1);
      return result;
    },
  },
  firstDosage: {
    content: "first-dosage",
    options: DateAndTime,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setDate(result.getDate() - 1);
      result.setHours(18, 0);
      return result;
    },
  },
  secondDosage: {
    content: "second-dosage",
    options: DateAndTime,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setDate(result.getDate() - 1);
      result.setHours(20, 0);
      return result;
    },
  },
  oneDosage: {
    content: "one-dosage",
    options: DateAndTime,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setDate(result.getDate() - 1);
      result.setHours(18, 0);
      return result;
    },
  },
  fastInstructions: {
    content: "fast-instructions",
    options: DateAndTime,
    getDate: (Case) => {
      const result = new Date(Case.procedureDateAndTime);
      result.setHours(0, 0);
      return result;
    },
  },
};

const data = {
  golytely: [
    instructions.fiberDiet,
    instructions.fluidsOnly,
    instructions.oneDosage,
    instructions.fastInstructions,
  ],
  suprep: [
    instructions.fiberDiet,
    instructions.fluidsOnly,
    instructions.firstDosage,
    instructions.secondDosage,
    instructions.fastInstructions,
  ],
};

const DottedLine = styled.div`
  height: 100%;
  border-right: 1px dotted #7a9dfd;
  visibility: ${({ last }) => (last ? "hidden" : "visible")};
`;

const Container = styled.div`
  margin-block-end: 5px;
  display: grid;
  grid-template-columns: 15px auto;
  grid-template-rows: repeat(8, min-content);
  place-items: center;
  column-gap: 8px;
`;

const Bullet = styled.div`
  background-color: #527ffa;
  width: 0.688rem;
  height: 0.688rem;
  border-radius: 50%;
`;

const StepDetails = styled.div`
  color: #527ffa;
  font-size: 1.188rem;
  place-self: start;
`;

const DescriptionText = styled.div`
  place-self: start;
  font-size: 1.188rem;
  padding-block-end: 1.063rem;
`;
