import { useContext } from "react";
import { LanguageContext, languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";
import { userContext } from "../../providers/UserProvider";
import styled from "styled-components";

function LanguageBar() {
  const { updateLanguage, language: selectedLanguage } =
    useContext(LanguageContext);
  const { id: userId } = useContext(userContext);

  return (
    <StyledLanguageBar
      selectedLanguage={selectedLanguage}
      handleSelect={(language) => updateLanguage({ userId, language })}
      languages={languages}
    />
  );
}

export default LanguageBar;

const StyledLanguageBar = styled(GistLanguageBar)`
  padding-inline: var(--screen-texts-padding);
`;
