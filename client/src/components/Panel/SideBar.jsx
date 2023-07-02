import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CircleProfile from "../../assets/Panel/circle_profile.svg";
import Plus from "../../assets/Icons/plus.svg";
import Support from "./Support";

const roles = {
  coordinator: "אחות ראשית סטומה",
};

const SideBar = ({ stuffData }) => {
  return (
    <Container>
      <Inner>
        <Content>
          <img src={CircleProfile} style={{ maxWidth: "132px" }} alt="img" />
          <Name>{stuffData.name}</Name>
          <SubName>{roles[stuffData.role]}</SubName>
          <CasesCounters>
            <CounterWrapper>
              <Number>{stuffData.totalCases}</Number>
              <Title>הדרכות סה&quot;כ</Title>
            </CounterWrapper>
            <Divider />
            <CounterWrapper>
              <Number>{stuffData.todayCases}</Number>
              <Title>הדרכות מהיום</Title>
            </CounterWrapper>
          </CasesCounters>
          <AddButton to="/gister">
            <img src={Plus} alt="img" />
          </AddButton>
          <NewCase>יצירת הדרכה חדשה</NewCase>
        </Content>
        <Support />
      </Inner>
    </Container>
  );
};

SideBar.propTypes = {
  stuffData: PropTypes.object,
};

export default SideBar;

const Container = styled.div`
  width: 20%;
  text-align: center;
  position: sticky;
  z-index: 0;
  overflow-y: hidden;
  overflow-x: auto;
  background: white;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - var(--header-size));
  padding-block-start: 39px;
`;

const Content = styled.div`
  width: 100%;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
  margin-top: 15px;
`;

const SubName = styled.div`
  font-size: 18px;
  color: #444444;
`;

const AddButton = styled(Link)`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: #f02a4c;
  margin: 0px auto 10px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 3px 6px rgba(255, 255, 255, 0.16);
  }
`;

const CasesCounters = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-block: 37px;
`;

const CounterWrapper = styled.div``;

const Number = styled.p`
  color: #84a4fb;
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0 0.5rem 0.5rem 0.5rem;
`;

const Title = styled.p`
  font-size: 1rem;
  margin: 0rem;
`;

const Divider = styled.div`
  border-right: 1px solid #c9c9c9;
  opacity: 1;
  height: 3.3rem;
`;

const NewCase = styled.div`
  font-weight: 600;
`;
