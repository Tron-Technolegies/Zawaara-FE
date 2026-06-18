import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-[100px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default HomeLayout;