import { Outlet } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";

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
