import PropTypes from "prop-types";
import styled from "styled-components";
import StepProgress from "./StepProgress";
import CaseItemButtons from "./CaseItemButtons";
import CommentBox from "./CommentBox";

const DateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export default function CaseItemExpand({ item, show }) {
  return (
    <Container show={show}>
      <CaseItemButtons item={item} />

      <Column>
        <div>
          <Text>Contact Info.</Text>
          <div>{item.User.phoneNumber}</div>
          <div>{item.User.email}</div>
        </div>
        <div>
          <Text>Laxative Solution Type</Text>
          {concentrateMapper[item.concentrate]}
        </div>
      </Column>
      <Column>
        <CommentBox CaseId={item.id} defaultValue={item.Comment?.text} />
        <CreatedBy>
          Created by | {item.creator.name},{" "}
          {new Date(item.createdAt).toLocaleString("en-US", DateOptions)}
        </CreatedBy>
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
  golytely: "Golytely",
  suprep: "Suprep",
};

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

const CreatedBy = styled.span`
  font-size: 0.875rem;
`;
