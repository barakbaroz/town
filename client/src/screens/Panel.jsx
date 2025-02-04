import { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/Panel/SideBar";
import Cases from "../components/Panel/Cases";
import SearchBar from "../components/Panel/SearchBar";
import panelBackground from "../assets/Backgrounds/panel_background.svg";
import useCasesCount from "../hooks/useCasesCount";

export default function Panel() {
  const [search, setSearch] = useState({
    patientStatus: "all",
    myCases: true,
  });
  const { casesCount, fetch: refetchCasesCount } = useCasesCount(search);

  return (
    <Container>
      <SearchBar search={search} setSearch={setSearch} />
      <Wrapper>
        <SideBar casesCount={casesCount} />
        <Cases search={search} refetchCasesCount={refetchCasesCount} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  --header-size: calc(40px + 0.8rem * 2);
  min-height: 100vh;
  min-width: 100vw;
  font-family: "Assistant";
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-image: url(${panelBackground});
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
`;
