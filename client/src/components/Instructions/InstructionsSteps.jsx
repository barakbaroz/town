import styled from "styled-components";
import { Translator } from "../Translation";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

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

const dateFormater = new Intl.DateTimeFormat(undefined, dateOptions);

function InstructionsSteps() {
  const { Case } = useContext(userContext);
  console.log({ res: Case.CasesProgress.createdAt });
  const createdAt = new Date(Case.CasesProgress.createdAt);
  console.log(`Instructions-Steps - ${dayMapper[createdAt.getDay()]}`);

  return (
    <Container>
      {data.map(({ date, content }) => {
        return (
          <>
            <Bullet />
            <StepDetails>
              <Translator>
                {`Instructions-Steps-${dayMapper[date.getDay()]}`}
              </Translator>
              {" / "}
              {dateFormater.format(date)}
              {" / "}
              {date.toLocaleTimeString("en-IL")}
            </StepDetails>
            <Wrapper>
              <DottetLine />
            </Wrapper>
            <DescriptionText>
              <Translator>{content}</Translator>
            </DescriptionText>
          </>
        );
      })}
    </Container>
  );
}

const data = [
  { date: new Date(), content: "diet" },
  { date: new Date(), content: "liquids" },
  { date: new Date(), content: "first" },
  { date: new Date(), content: "second" },
];

export default InstructionsSteps;

const Container = styled.div`
  display: grid;
  grid-template-columns: 15px 1fr;
  place-items: center;
`;

const DottetLine = styled.div`
  height: 100%;
  border-right: 1px dotted #7a9dfd;
`;

const Wrapper = styled.div`
  display: contents;
  background-color: red;
  & > ${DottetLine}:last-child() {
    border-right: 1px dotted red;
  }
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
`;
