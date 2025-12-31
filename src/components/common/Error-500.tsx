// src/components/common/Error500.tsx
import { RotateCcw, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const Error500 = () => {
  const { t } = useTranslation();

  return (
    <main
      aria-labelledby="error500-title"
      className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 text-center"
      role="alert"
      aria-live="assertive"
    >
      <div
        className="absolute -z-10 text-[15rem] font-bold opacity-[0.03] select-none"
        aria-hidden="true"
      >
        500
      </div>

      <div className="mb-6 flex justify-center">
        <AlertCircle className="w-16 h-16 text-destructive" aria-hidden="true" />
      </div>

      <h1 id="error500-title" className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("error500.title")}
      </h1>

      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        {t("error500.description")}
      </p>

      <Button
        onClick={() => window.location.reload()}
        className="
          group flex items-center gap-3
          px-8 py-4
          rounded-xl
          bg-dracula-red text-background
          hover:bg-dracula-red/90
          shadow-lg shadow-dracula-red/30
          transition-all duration-300
        "
        aria-label={t("error.retry_aria")}
      >
        <RotateCcw className="w-5 h-5 transition-transform group-hover:-rotate-180" aria-hidden="true"/>
        <span className="font-semibold tracking-wide">
          {t("error500.retry_button")}
        </span>
      </Button>
    </main>
  );
};

export default Error500;