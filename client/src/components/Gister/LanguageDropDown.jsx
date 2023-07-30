import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function LanguageDropDown({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("he");

  const hensleSelect = (vlaue) => () => {
    setSelected(vlaue);
    onChange(vlaue);
    setIsOpen(false);
  };

  const ListData = data
    .filter((value) => value != selected)
    .map((value) => (
      <Option key={value} onClick={hensleSelect(value)}>
        {text[value]}
      </Option>
    ));

  return (
    <Container>
      <Select>
        <Option onClick={() => setIsOpen((prev) => !prev)}>
          <span>{text[selected]}</span>
          <div>V</div>
        </Option>
        <List open={isOpen}>{ListData}</List>
      </Select>
    </Container>
  );
}

LanguageDropDown.propTypes = {
  onChange: PropTypes.func,
};

const data = ["he", "ar", "ru", "en"];

const text = {
  he: "עברית",
  ar: "ערבית",
  ru: "רוסית",
  en: "אנגלית",
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 250ms ease-in;
  outline: none;
  font-size: var(--field-font-size);
  height: calc(var(--field-line-height) + var(--field-padding-block) * 2);
`;

const Select = styled.div`
  width: 100%;
  position: absolute;
  background-color: #f5f6f8;
  border-radius: 10px;
  overflow: hidden;
`;

const Option = styled.div`
  padding-inline: 18px;
  padding-block: var(--field-padding-block);
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  overflow: auto;
  transition: all 200ms linear;
  max-height: ${({ open }) => (open ? "200px" : 0)};

  ${Option} {
    border-top: 1px solid #e2e2e2;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
