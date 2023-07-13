import PropTypes from "prop-types";
import styled from "styled-components";
import useCasesSearch from "../../hooks/useCasesSearch";
import CaseItem from "./CaseItem";
import SkeletonCaseItem from "./SkeletonCaseItem";

const Cases = ({ search, refetchCasesCount }) => {
  const { loading, cases, error, deleteCase } = useCasesSearch(
    search,
    refetchCasesCount
  );
  if (error) return <Message>Error</Message>;

  if (!loading && !cases.length) return <Message>No cases found</Message>;

  return (
    <Container>
      {cases.map((item) => (
        <CaseItem item={item} key={item.id} deleteCase={deleteCase} />
      ))}
      {loading &&
        [...Array(30)].map((_, index) => <SkeletonCaseItem key={index} />)}
    </Container>
  );
};
export default Cases;

Cases.propTypes = {
  search: PropTypes.object,
  refetchCasesCount: PropTypes.func,
};

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - var(--header-size));
`;

const Message = styled.div`
  margin: 20px auto;
  font-size: 1.5rem;
`;
