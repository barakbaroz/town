import PropTypes from "prop-types";
import { LanguagesData } from "./Texts";
import { useLanguage } from "../../providers/LanguageProvider";

export default function Translator({ children }) {
  const key = children instanceof Array ? children.join("") : children;
  return <>{Translate(key)}</>;
}

export function Translate(key) {
  const { language, gender } = useLanguage();
  return (
    LanguagesData[language][key] ||
    LanguagesData[language][`${key}-${gender}`] ||
    key
  );
}

export const languages = [
  { name: "عربيه", value: "ar" },
  { name: "English", value: "en" },
  { name: "Pусский", value: "ru" },
];

Translator.propTypes = {
  children: PropTypes.node,
};
