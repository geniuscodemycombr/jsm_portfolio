// LanguageSwitcher.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    i18n.changeLanguage(value);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      {/* Adicione mais opções conforme necessário */}
    </select>
  );
};

export default LanguageSwitcher;
