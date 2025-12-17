import { Outlet } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    // Adicione bg-dracula-bg aqui para garantir que o fundo cubra a troca de páginas
    <div className="flex flex-col min-h-screen bg-dracula-bg font-jetbrains">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
