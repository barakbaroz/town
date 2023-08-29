import { Fragment } from "react";
import styled from "styled-components";
import { Translator, Translate } from "../Translation";

const dayMapper = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

const dateOptions = {
  month: "numeric",
  day: "numeric",
};

const timeOptions = { hour: "2-digit", minute: "2-digit" };

function InstructionsSteps() {
  const { firstPortion, secondPortion, dietTime, liquids } = getTimes(
    "2023-07-30",
    "12:00"
  );

  const data = [
    { date: dietTime, content: "Diet", showTime: false },
    { date: liquids, content: "Liquids", showTime: false },
    { date: firstPortion, content: "FirstPortion", showTime: true },
    { date: secondPortion, content: "SecondPortion", showTime: true },
  ];

  const dateFormater = new Intl.DateTimeFormat("he-IL", dateOptions);
  return (
    <Container>
      {data.map(({ date, content, showTime }, index) => {
        return (
          <Fragment key={content}>
            <Bullet />
            <StepDetails>
              {Translate(`Instructions-Steps-${dayMapper[date.getDay()]}`)}
              {" | "}
              {dateFormater.format(date)}
              {showTime &&
                " | " + date.toLocaleTimeString("he-IL", timeOptions)}
            </StepDetails>
            <DottetLine last={index === data.length - 1} />
            <DescriptionText>
              <Translator>{`Instructions-Steps-${content}`}</Translator>
            </DescriptionText>
          </Fragment>
        );
      })}
    </Container>
  );
}

export default InstructionsSteps;

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
    secondPortion.getHours(hour - 6, 0, 0, 0);
  } else if (hour >= 17 && hour <= 19) {
    firstPortion.setHours(hour - 11, 0, 0, 0);
    secondPortion.getHours(hour - 6, 0, 0, 0);
  }
  return { firstPortion, secondPortion, dietTime, liquids };
};

const DottetLine = styled.div`
  height: 100%;
  border-right: 1px dotted #7a9dfd;
  visibility: ${({ last }) => (last ? "hidden" : "visible")};
`;

const Container = styled.div`
  margin-block-end: 5px;
  display: grid;
  grid-template-columns: 15px 1fr;
  place-items: center;
`;

const Bullet = styled.div`
  background-color: #527ffa;
  width: 0.688rem;
  height: 0.688rem;
  border-radius: 50%;
`;

const StepDetails = styled.div`
  color: #527ffa;
  font-size: 1.063rem;
  place-self: start;
`;

const DescriptionText = styled.div`
  place-self: start;
  font-size: 1.063rem;
  padding-block-end: 1.063rem;
`;
