import { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/Panel/SideBar";
import Cases from "../components/Panel/Cases";
import SearchBar from "../components/Panel/SearchBar";
import panelBackground from "../assets/Backgrounds/panel_background.svg";
import useStuffMembersInfo from "../hooks/useStuffMembersInfo";
import { LanguageProvider } from "../components/Translation";

const Panel = () => {
  const [search, setSearch] = useState({ patientStatus: "all" });
  const { stuffData, fetch: fetchStuffMembersInfo } = useStuffMembersInfo();

  return (
    <LanguageProvider>
      <Container>
        <SearchBar search={search} setSearch={setSearch} />
        <Wrapper>
          <SideBar stuffData={stuffData} />
          <Cases
            search={search}
            fetchStuffMembersInfo={fetchStuffMembersInfo}
          />
        </Wrapper>
      </Container>
    </LanguageProvider>
  );
};
export default Panel;

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  font-family: "Assistant";
  direction: rtl;
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
