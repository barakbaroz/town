import { languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";
import { useLanguage } from "../../providers/LanguageProvider";

function LanguageBar(props) {
  const { updateLanguage, language } = useLanguage();
  //disable language bar
  return <span></span>;

  /* eslint-disable no-unreachable */
  return (
    <GistLanguageBar
      selectedLanguage={language}
      handleSelect={updateLanguage}
      languages={languages}
      {...props}
    />
  );
}

export default LanguageBar;
