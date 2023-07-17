import { useContext } from "react";
import { LanguageContext, languages } from "../Translation";
import { LanguageBar as GistLanguageBar } from "@gistmed/gist-ui";
import { userContext } from "../../providers/UserProvider";

function LanguageBar() {
  const { updateLanguage, language: selectedLanguage } =
    useContext(LanguageContext);
  const { id: userId } = useContext(userContext);

  return <span></span>;

  /* eslint-disable no-unreachable */
  return (
    <GistLanguageBar
      selectedLanguage={selectedLanguage}
      handleSelect={(language) => updateLanguage({ userId, language })}
      languages={languages}
    />
  );
}

export default LanguageBar;
