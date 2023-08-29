import PropTypes from "prop-types";
import styled from "styled-components";
import DropDown from "./DropDown";
import GuidanceSwitcher from "./GuidanceSwitcher";
import Black_X from "../../assets/Icons/black_X.svg";
import searchLogo from "../../assets/Icons/search.svg";
import gistLogo from "../../assets/Logos/gist_logo.svg";
import hospitalLogo from "../../assets/Logos/hospital_logo.svg";
import { ReactComponent as ExitIcon } from "../../assets/Icons/exit.svg";
import { ReactComponent as Reload } from "../../assets/Icons/reload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@gistmed/gist-ui";

const NumbersRgx = /(^[0-9]+$|^$)/;

function SearchBar({ search, setSearch }) {
  const navigate = useNavigate();
  const handleZehut = (event) => {
    const { value } = event.target;
    if (!NumbersRgx.test(value)) return;
    setSearch((prev) => ({ ...prev, zehutNumber: value }));
  };

  const clearId = () =>
    setSearch((prev) => ({ patientStatus: prev.patientStatus }));

  const clearSearch = () => setSearch({ patientStatus: "all" });

  const handleLogout = () => {
    axios.get("/api/stuffMembers/logout").then(() => navigate("/login"));
  };
  const handleDateSearch = (date) => setSearch((prev) => ({ ...prev, date }));

  return (
    <Container>
      <HospitalLogoContainer>
        <Logo src={hospitalLogo} alt="Hospital Logo" />
      </HospitalLogoContainer>
      <SearchHeader>
        <GreyWrapper>
          <SearchIcon src={searchLogo} />
          <Input
            placeholder="0000"
            onChange={handleZehut}
            maxLength={4}
            value={search.zehutNumber || ""}
          />
          <DatePickerWrapper
            onChange={handleDateSearch}
            defaultValue={null}
            minValue={null}
            value={search.date || null}
          />
          <ClearId onClick={clearId} id="ClearId" />
        </GreyWrapper>
        <GuidanceSwitcher search={search} setSearch={setSearch} />
        <DropDown setSearch={setSearch} selectedOne={search.patientStatus} />
        <IconButton onClick={clearSearch}>
          <Reload />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <ExitIcon />
        </IconButton>
      </SearchHeader>

      <GistLogoContainer>
        <Logo src={gistLogo} alt="Gist Logo" />
      </GistLogoContainer>
    </Container>
  );
}

SearchBar.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
};

export default SearchBar;

const Logo = styled.img`
  height: 40px;
`;

const SearchHeader = styled.div`
  display: flex;
  width: 71%;
  height: 100%;
  padding-inline-start: 8%;
  box-sizing: border-box;
  gap: 1.25rem;
  align-items: center;
`;

const Container = styled.div`
  --field-height: 1rem;
  --field-padding-block: 0.688rem;
  display: flex;
  align-items: center;
  background-color: white;
  font-family: "Assistant";
  position: sticky;
  z-index: 1;
  padding-block: 1.438rem;
  box-shadow: 0px 3px 6px #0000001f;
`;

const HospitalLogoContainer = styled.div`
  width: 20%;
  display: flex;
  padding-inline-start: 2%;
  box-sizing: border-box;
`;

const GistLogoContainer = styled.div`
  display: flex;
  padding-inline-end: 2%;
  box-sizing: border-box;
  width: 9%;
  flex-direction: row-reverse;
`;

const GreyWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  background: #f4f4f4;
  align-items: center;
  padding: 0.4rem 1rem;
  height: var(--field-height);
  padding-block: var(--field-padding-block);
`;

const Input = styled.input`
  width: 1cm;
  padding-inline: 29px;
  border: none;
  outline: none;
  background: transparent;
  text-align: end;
  font-weight: 600;
  font-family: "Assistant";
  cursor: pointer;
  ::placeholder {
    opacity: 40%;
  }
  :hover {
    ::placeholder {
      color: #84a4fc;
      opacity: 50%;
    }
  }
`;

const SearchIcon = styled.img.attrs({
  src: searchLogo,
  alt: "",
})`
  height: 1.063rem;
  width: 1.063rem;
`;

const ClearId = styled.img.attrs({
  src: Black_X,
  alt: "X",
})`
  cursor: pointer;
  height: 0.563rem;
  width: 0.563rem;
`;

const IconButton = styled.button`
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  path {
    transition: all 250ms linear;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    path {
      fill: #84a4fc;
    }
  }
`;
const DatePickerWrapper = styled(DatePicker)`
  padding-inline-end: 18px;
  padding-inline-start: 107px;
  border-right: 1px solid #707070;
`;
