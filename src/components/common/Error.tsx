import { useNavigate } from "react-router";
import { AlertCircle, FileQuestion, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

interface ErrorPageProps {
  statusCode?: 404 | 500;
  resetErrorBoundary?: () => void; // Caso use react-error-boundary
}

const ErrorPage = ({ statusCode = 404, resetErrorBoundary }: ErrorPageProps) => {
  const navigate = useNavigate();
  const is404 = statusCode === 404;

  const content = {
    title: is404 ? "Página não encontrada" : "Erro inesperado",
    sub: is404 ? "404" : "500",
    message: is404 
      ? "Parece que você tentou acessar uma rota que não existe ou foi movida." 
      : "Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.",
    icon: is404 
      ? <FileQuestion className="w-16 h-16 text-muted-foreground" /> 
      : <AlertCircle className="w-16 h-16 text-destructive" />
  };

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 text-center">
      <div className="absolute -z-10 text-[15rem] font-bold opacity-[0.03] select-none">
        {content.sub}
      </div>

      <div className="mb-6 flex justify-center">
        {content.icon}
      </div>

      <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {content.title}
      </h1>
      
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        {content.message}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {statusCode === 404 && (
        <Button 
          variant="default" 
          onClick={() => navigate("/")}
          className="gap-2 bg-transparent"

        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Button>
        )}
        {statusCode === 500 && (
          <Button 
            variant="outline" 
            onClick={() => resetErrorBoundary ? resetErrorBoundary() : window.location.reload()}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Tentar novamente
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;