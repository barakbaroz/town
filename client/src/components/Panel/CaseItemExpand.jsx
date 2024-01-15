import PropTypes from "prop-types";
import styled from "styled-components";
import StepProgress from "./StepProgress";
import CaseItemButtons from "./CaseItemButtons";
import { DatePicker } from "@gistmed/gist-ui";
import TimePicker from "../Gister/TimePicker";
import { parseDate } from "@internationalized/date";
import axios from "axios";

export default function CaseItemExpand({ item, show }) {
  const handleChangeDate = (data) => {
    axios.put("/api/cases/update", {
      id: item.id,
      procedureDate: data.toDate(),
    });
  };

  const handleChangeTime = (time) => {
    axios.put("/api/cases/update", {
      id: item.id,
      procedureTime: time,
    });
  };

  return (
    <Container show={show}>
      <CaseItemButtons item={item} />

      <Column>
        <div>
          <Text>Contact Info.</Text>
          {item.User.phoneNumber}
        </div>
        <div>
          <Text>Laxative Solution Type</Text>
          {concentrateMapper[item.concentrate]}
        </div>
      </Column>

      <Column>
        <DateAndTimeTitle>Update the procedure date</DateAndTimeTitle>
        <DateAndTime>
          <DateAndTimeWrapper>
            <DatePicker
              label="date"
              defaultValue={parseDate(item.procedureDate)}
              onChange={handleChangeDate}
              locale="en-US"
            />
          </DateAndTimeWrapper>
          <DateAndTimeWrapper>
            <TimePicker
              defaultValue={item.procedureTime}
              onChange={handleChangeTime}
              fromCaseItem={true}
            />
          </DateAndTimeWrapper>
        </DateAndTime>
        <TextArea
          defaultValue={item.Comment?.message}
          placeholder="Add a comment…"
          disabled={true}
        />
        <div>
          Case created by | {item.creator.name}
          {new Date(item.createdAt).toLocaleDateString("en-US")}
        </div>
      </Column>

      <Column>
        <StepProgress item={item} />
      </Column>
    </Container>
  );
}
CaseItemExpand.propTypes = {
  item: PropTypes.object,
  show: PropTypes.bool,
};

const concentrateMapper = {
  moviprep: "Moviprep",
  colyte: "Colyte",
};

const DateAndTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateAndTimeWrapper = styled.div`
  border-radius: 100vh;
  background-color: #f2f3f7;
  padding-inline: 16px;
  padding-block: 7px;
  width: 7.8125em;
`;
const DateAndTimeTitle = styled.div`
  color: #84a4fc;
  font-weight: 700;
  font-size: 18px;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 24.5% 29% 29%;
  grid-column-gap: 2.5%;
`;

const Container = styled(ItemGrid)`
  height: ${({ show }) => (show ? "fit-content" : "0px")};
  overflow: hidden;
`;

const Column = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  gap: 1.5rem;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  color: #444444;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  overflow: auto;
  border: none;
  font-size: 16px;
  line-height: 21px;
  color: #444444;
  resize: none;
  outline: none;
  font-family: "Assistant";
  border: 1px #dfdfdf solid;
  border-radius: 15px;
  padding: 15px;
  height: 6rem;
  cursor: not-allowed;
  box-sizing: border-box;
`;
