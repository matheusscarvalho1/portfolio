import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.split("-")[0];

  return (
    <div className="flex items-center gap-1 bg-dracula-current/20 p-1 rounded-lg border border-dracula-current/30">
      {["pt", "en"].map((lng) => (
        <Button
          key={lng}
          onClick={() => toggleLanguage(lng)}
          className={`relative px-3 py-1 text-xs font-bold uppercase transition-colors duration-300 rounded-md
            ${
              currentLanguage === lng
                ? "text-dracula-bg"
                : "text-dracula-text hover:text-dracula-primary"
            }
          `}
        >
          {currentLanguage === lng && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-dracula-primary rounded-md -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {lng}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
