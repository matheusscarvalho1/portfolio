import { Spinner } from "@/components/ui/spinner";

const LoadingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen gap-4"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Spinner
        className="size-12 text-dracula-cyan animate-spin"
        fontSize="60"
        aria-hidden="true"
      />

      <p className="text-dracula-secondary text-sm animate-dots">
        <span className="sr-only">Carregando conteúdo</span>
        <span aria-hidden="true">// Carregando dados do terminal</span>
      </p>
    </div>
  );
};

export default LoadingPage;
