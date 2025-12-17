import { Spinner } from "@/components/ui/spinner"

const LoadingPage = () => {
    return ( 
        <div className="flex flex-col items-center justify-center w-full gap-4">
            
            <Spinner
              className="size-12 text-dracula-cyan animate-spin"
            />
            
            <p className="text-dracula-secondary text-sm animate-dots">
                // Carregando dados do terminal
            </p>
        </div>
     );
}
 
export default LoadingPage;
