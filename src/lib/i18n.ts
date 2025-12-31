import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationPtBR from "@/locales/pt-br/translation.json";
import translationEnUS from "@/locales/en-us/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US"],
    fallbackLng: "pt-BR",

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },

    resources: {
      "pt-BR": {
        translation: translationPtBR,
      },
      "en-US": {
        translation: translationEnUS,
      },
    },
  });

export default i18n;