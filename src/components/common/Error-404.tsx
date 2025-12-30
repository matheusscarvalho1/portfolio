// src/components/common/Error404.tsx
import { useNavigate } from "react-router";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <main
      aria-labelledby="error-title"
      className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 text-center"
      role="status"
      aria-live="polite"
    >
      <div
        className="absolute -z-10 text-[15rem] font-bold opacity-[0.03] select-none"
        aria-hidden="true"
      >
        404
      </div>

      <div className="mb-6 flex justify-center">
        <FileQuestion className="w-16 h-16 text-muted-foreground" aria-hidden="true" />
      </div>

      <h1 id="error-title" className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Página não encontrada
      </h1>

      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        Parece que você tentou acessar uma rota que não existe ou foi movida.
      </p>

      <Button
        onClick={() => navigate("/")}
        className="
          group flex items-center gap-3
          px-8 py-4
          rounded-xl
          bg-dracula-primary text-background
          hover:bg-dracula-primary/90
          shadow-lg shadow-dracula-primary/30
          transition-all duration-300
        "
      >
        <ArrowLeft
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        />
        <span className="font-semibold tracking-wide">
          Voltar ao início
        </span>
      </Button>
    </main>
  );
};

export default Error404;
