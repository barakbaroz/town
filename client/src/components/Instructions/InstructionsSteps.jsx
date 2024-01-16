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
  const { procedureDate, procedureTime } = Case;
  const { firstPortion, secondPortion, dietTime, liquids } = getTimes(
    procedureDate,
    procedureTime
  );

  const data = [
    { date: dietTime, content: "Diet", options: DateOnly },
    { date: liquids, content: "Liquids", options: DateOnly },
    { date: firstPortion, content: "FirstPortion", options: DateAndTime },
    { date: secondPortion, content: "SecondPortion", options: DateAndTime },
  ];

  return (
    <Container>
      {data.map(({ date, content, options }, index) => (
        <Fragment key={content}>
          <Bullet />
          <StepDetails>
            {date
              .toLocaleString(`${language}-US`, options)
              .replaceAll(",", " |")}
          </StepDetails>
          <DottedLine last={index === data.length - 1} />
          <DescriptionText>
            <Translator>{`Instructions-Steps-${content}`}</Translator>
          </DescriptionText>
        </Fragment>
      ))}
    </Container>
  );
}

const getTimes = (procedureDate, procedureTime) => {
  const date = new Date(procedureDate);
  const [hour] = procedureTime.split(":");

  const dietTime = new Date(date);
  dietTime.setDate(date.getDate() - 3);
  const liquids = new Date(date);
  liquids.setDate(date.getDate() - 1);

  const firstPortion = new Date(date);
  const secondPortion = new Date(date);

  if (hour >= 7 && hour <= 11) {
    firstPortion.setDate(date.getDate() - 1);
    firstPortion.setHours(16, 0, 0, 0);
    secondPortion.setDate(date.getDate() - 1);
    secondPortion.setHours(21, 0, 0, 0);
  } else if (hour >= 12 && hour <= 16) {
    firstPortion.setDate(date.getDate() - 1);
    firstPortion.setHours(21, 0, 0, 0);
    secondPortion.setHours(hour - 6, 0, 0, 0);
  } else if (hour >= 17 && hour <= 19) {
    firstPortion.setHours(hour - 11, 0, 0, 0);
    secondPortion.setHours(hour - 6, 0, 0, 0);
  }
  return { firstPortion, secondPortion, dietTime, liquids };
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
