import PropTypes from "prop-types";
import styled from "styled-components";
import StepProgress from "./StepProgress";
import CaseItemButtons from "./CaseItemButtons";
import { useState } from "react";
import axios from "axios";

const DateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export default function CaseItemExpand({ item, show }) {
  const [comment, setComment] = useState(item.Comment?.text || "");

  const sendComment = () =>
    axios.post("/api/cases/comment", { CaseId: item.id, comment });

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
        <TextArea
          defaultValue={item.Comment?.message}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment…"
        />
        <SaveComment onClick={sendComment}>
          {item.Comment?.text ? "Update" : "Save"}
        </SaveComment>
        <span>
          Case created by | {item.creator.name},{" "}
          {new Date(item.createdAt).toLocaleString("en-US", DateOptions)}
        </span>
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
  resize: none;
  outline: none;
  font-family: "Assistant";
  border: 1px #dfdfdf solid;
  border-radius: 15px;
  padding: 15px;
  height: 6rem;
  box-sizing: border-box;
`;

const SaveComment = styled.button`
  background-color: #84a4fc;
  color: #fcfafa;
  padding-inline: 25px;
  padding-block: 7px;
  border-radius: 20px;
  border: none;
  width: fit-content;
  font-weight: 600;
  cursor: pointer;
`;
