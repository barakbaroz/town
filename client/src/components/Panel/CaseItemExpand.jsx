import PropTypes from "prop-types";
import styled from "styled-components";
import StepProgress from "./StepProgress";
import CaseItemButtons from "./CaseItemButtons";

const CaseItemExpand = ({ item, show }) => {
  return (
    <Container show={show}>
      <CaseItemButtons item={item} />

      <Column style={{ width: "19%", gap: "1rem" }}>
        <div>
          <Text>פרטי קשר מטופל</Text>
          {item.Users.map((user, index) => (
            <SubText key={user.id}>
              הורה {index + 1} {user.phoneNumber}
            </SubText>
          ))}
        </div>
      </Column>

      <Column style={{ gap: "23px" }}>
        <TextArea
          defaultValue={item.Comment?.message}
          placeholder="הוספת הערה..."
          disabled={true}
        />
      </Column>

      <ProgressColumn>
        <StepProgress item={item} />
      </ProgressColumn>
    </Container>
  );
};
export default CaseItemExpand;

CaseItemExpand.propTypes = {
  item: PropTypes.object,
  show: PropTypes.bool,
};

const Container = styled.div`
  height: ${({ show }) => (show ? "fit-content" : "0px")};
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  gap: 4%;
`;

const Column = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  width: 29%;
  height: 98%;
  margin: 2rem 0;
`;

const ProgressColumn = styled(Column)`
  width: 28%;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  color: #444444;
  margin-bottom: 5px;
`;
const SubText = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #444444;
  display: flex;
  direction: ltr;
  justify-content: flex-end;
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
  width: 94%;
  height: 6rem;
  cursor: not-allowed;
`;
