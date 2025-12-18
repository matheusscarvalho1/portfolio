import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dracula-bg font-jetbrains">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
