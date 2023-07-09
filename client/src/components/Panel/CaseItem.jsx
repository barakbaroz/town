import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import CircularProgress from "./CircularProgress";
import CaseItemExpand from "./CaseItemExpand";
import DeletePopup from "./DeletePopup";
import Trash from "../../assets/Icons/trash.svg";
import Avatars from "../../assets/Characters";

const dateOptions = { year: "2-digit", month: "2-digit", day: "2-digit" };

function CaseItem({ item, deleteCase }) {
  const [expand, setExpand] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);

  const handleExpand = () => setExpand((prev) => !prev);

  return (
    <Case>
      <DeletePopup
        deleteCase={() => deleteCase(item.id)}
        close={() => setShowDeletePopUp(false)}
        show={showDeletePopUp}
      />
      <Container onClick={handleExpand}>
        <Avatar>
          <AvatarImage
            alt="avatar"
            src={
              Avatars[`${item.gender}_${item.age}_${item.ethnicity}`] ||
              Avatars.blank
            }
          />
          <Line />
        </Avatar>
        <Unit style={{ width: "19%" }}>
          <Heading>ת.ז {item.zehutNumber}</Heading>
          <SubHeadin>{getLengAndAge(item)}</SubHeadin>
        </Unit>
        <Unit>
          <Heading>{departments[item.department]}</Heading>
          <SubHeadin>
            {new Date(item.preSurgery).toLocaleDateString("en-US", dateOptions)}
          </SubHeadin>
        </Unit>
        <EndPart>
          <Progress>
            <ProgressText>{getMaxProgress(item)}</ProgressText>
            <CircularProgress
              maxValue={4}
              progress={
                Object.values(item.CasesProgress).filter((progress) => progress)
                  .length
              }
            />
          </Progress>
          <TrashContainer onClick={() => setShowDeletePopUp(true)}>
            <img alt="trash" src={Trash} />
          </TrashContainer>
        </EndPart>
      </Container>
      <CaseItemExpand item={item} show={expand} />
    </Case>
  );
}

CaseItem.propTypes = {
  item: PropTypes.object,
  deleteCase: PropTypes.func,
};

const getMaxProgress = (item) => {
  if (item.CasesProgress.watchedVideo) return "סרטון נצפה";
  if (item.CasesProgress.generalInformationAnswered) return "שאלון נענה";
  if (item.CasesProgress.openSms) return "סמס נפתח";
  return "";
};

const genders = {
  male: "בן",
  female: "בת",
};

const languages = {
  sp: "ספרדית",
  ar: "ערבית",
  en: "אנגלית",
  ru: "רוסית",
  he: "עברית",
};

const getLengAndAge = ({ gender, age, Users }) => {
  const [user1] = Users;
  return [
    gender && age ? `${genders[gender]} ${age}` : "גיל",
    languages[user1.language],
  ].join(", ");
};

const departments = {
  urology: "אורולוגיה",
  otolaryngology: "אף אוזן גרון",
  surgery: "כירורגיה",
  neurosurgery: "נירוכירורגיה",
  orthopedic: "orthopedic",
  "orthopedic oncology": "אורתופגיה אונקולוגית",
  plastics: "פלסטיקה",
  eyes: "עיניים",
};

export default CaseItem;
const Case = styled.div`
  margin: 30px auto;
  width: 80%;
  border-radius: 15px;
  background: white;
`;

const Container = styled.div`
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: white;
  gap: 4%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

const Avatar = styled.div`
  width: 10%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 1px;
  background-color: #e5e5e5;
  height: 80%;
`;

const Unit = styled.div`
  width: 29%;
  text-align: start;
`;

const Heading = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  color: #444444;
`;

const SubHeadin = styled.div`
  font-size: 1rem;
  line-height: 23px;
  color: #444444;
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  height: 100%;
  column-gap: 5%;
  width: 90%;
  justify-content: flex-end;
`;

const TrashContainer = styled.div`
  background-color: #b2b8c9;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

const ProgressText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #84a4fc;
  text-align: end;
  width: max-content;
  padding: 0 0.5rem;
`;

const EndPart = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;
