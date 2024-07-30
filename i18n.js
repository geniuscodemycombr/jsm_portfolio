// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Para carregar traduções de um servidor

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma padrão
    lng: 'en', // Idioma inicial
    interpolation: {
      escapeValue: false, // React já faz a escape
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Caminho dos arquivos de tradução
    },
  });

export default i18n;