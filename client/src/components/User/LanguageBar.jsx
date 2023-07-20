import { useContext } from "react";
import { LanguageContext, languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";

function LanguageBar() {
  const { updateLanguage, language: selectedLanguage } =
    useContext(LanguageContext);

  return <span></span>;

  /* eslint-disable no-unreachable */
  return (
    <GistLanguageBar
      selectedLanguage={selectedLanguage}
      handleSelect={(language) => updateLanguage({ language })}
      languages={languages}
    />
  );
}

export default LanguageBar;
