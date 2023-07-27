import { useContext } from "react";
import { LanguageContext, languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";

function LanguageBar() {
  const { updateLanguage, language: selectedLanguage } =
    useContext(LanguageContext);

  return (
    <GistLanguageBar
      selectedLanguage={selectedLanguage}
      handleSelect={updateLanguage}
      languages={languages}
    />
  );
}

export default LanguageBar;
