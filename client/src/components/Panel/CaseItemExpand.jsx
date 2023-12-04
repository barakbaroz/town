import PropTypes from "prop-types";
import styled from "styled-components";
import StepProgress from "./StepProgress";
import CaseItemButtons from "./CaseItemButtons";
import { DatePicker } from "@gistmed/gist-ui";
import TimePicker from "../Gister/TimePicker";
import { parseDate } from "@internationalized/date";
import axios from "axios";
import dayjs from "dayjs";

const CaseItemExpand = ({ item, show }) => {
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

  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":");
    return dayjs().set("hour", hours).set("minute", minutes).format("HH:mm");
  };

  return (
    <Container show={show}>
      <CaseItemButtons item={item} />

      <Column>
        <div>
          <Text show={true}>פרטי קשר</Text>
          {item.User.phoneNumber}
        </div>
        <div>
          <Text show={true}>סוג תמיסה</Text>
          {concentrateMapper[item.concentrate]}
        </div>
      </Column>

      <Column>
        <DateAndTimeTitle>עדכון זמן בדיקה</DateAndTimeTitle>
        <DateAndTime>
          <DateAndTimeWrapper>
            <DatePicker
              label="date"
              defaultValue={parseDate(item.procedureDate)}
              onChange={handleChangeDate}
            />
          </DateAndTimeWrapper>
          <DateAndTimeWrapper>
            <TimePicker
              defaultValue={`${item.procedureDate}T${formatTime(
                item.procedureTime
              )}`}
              onChange={handleChangeTime}
              fromCaseItem={true}
            />
          </DateAndTimeWrapper>
        </DateAndTime>
        <TextArea
          defaultValue={item.Comment?.message}
          placeholder="הוספת הערה..."
          disabled={true}
        />
        <div>
          תאריך יצירת קייס |{" "}
          {new Date(item.createdAt).toLocaleDateString("he-IL")}
        </div>
      </Column>

      <Column>
        <StepProgress item={item} />
      </Column>
    </Container>
  );
};
CaseItemExpand.propTypes = {
  item: PropTypes.object,
  show: PropTypes.bool,
};

export default CaseItemExpand;

const concentrateMapper = {
  moviprep: "מוביפרפ",
  picolax: "פיקולקס",
  meroken: "מרוקן",
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
  display: ${({ show }) => (show ? "block" : "none")};
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
