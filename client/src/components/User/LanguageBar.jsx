import { languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";
import { useLanguage } from "../../providers/LanguageProvider";

function LanguageBar() {
  const { updateLanguage, language } = useLanguage();

  return <span></span>;

  /* eslint-disable no-unreachable */
  return (
    <GistLanguageBar
      selectedLanguage={language}
      handleSelect={updateLanguage}
      languages={languages}
    />
  );
}

export default LanguageBar;
