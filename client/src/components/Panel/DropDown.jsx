import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/Icons/hollow_arrow.svg";

const dropDownList = ["all", "openLink", "avatarSelection", "watchedVideo"];
const texts = {
  all: "Patient Status / All",
  openLink: "Text message opened",
  avatarSelection: "Questionnaire Answered",
  watchedVideo: "Video watched",
};

export default function DropDown({ setSearch, selectedOne }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref]);

  const handlePatientStatus = (value) => {
    setSearch((prev) => ({
      patientStatus: value,
      myCases: prev.myCases,
    }));
  };

  const filterdList = dropDownList.filter((item) => item !== selectedOne);

  return (
    <Wrapper
      isOpen={isOpen}
      ref={ref}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span />
      <Title>{texts[selectedOne]}</Title>
      <Icon isOpen={isOpen} src={arrowIcon} />
      <List isOpen={isOpen}>
        {filterdList.map((item) => (
          <Item key={item} onClick={() => handlePatientStatus(item)}>
            {texts[item]}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

DropDown.propTypes = {
  setSearch: PropTypes.func,
  selectedOne: PropTypes.string,
};

const Wrapper = styled.div`
  display: flex;
  border-radius: ${({ isOpen }) => (isOpen ? "20px 20px 0px 0px" : "20px")};
  background: #f4f4f4;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  position: relative;
  min-width: 10.6rem;
  height: var(--field-height);
  padding-block: var(--field-padding-block);
`;

const Icon = styled.img`
  margin-inline: 10px;
  margin-block-start: 3px;
  transition: all 250ms;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const List = styled.div`
  position: absolute;
  background-color: #f4f4f4;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.1);
  top: 100%;
  right: 0;
  left: 0;
  z-index: 5;
  border-radius: 20px;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const Title = styled.label`
  font-family: "Assistant";
  cursor: inherit;
  font-weight: 400;
  color: #444444;
  margin: 0 10px;
`;

const Item = styled.div`
  cursor: pointer;
  text-align: center;
  background: #f4f4f4;
  padding: 9px;
  border-bottom: 1px solid white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    color: #84a4fc;
  }
  &:last-child {
    border-radius: 0 0 12px 12px;
  }
`;
