import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomeLayout() {
  const location = useLocation();
  const isHeroPage =
    location.pathname === "/" ||
    location.pathname === "/bridal";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className={`flex-1 ${isHeroPage ? "pt-0" : "pt-[100px]"}`}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default HomeLayout;