import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useTheme } from "../context/ThemeContext";

const MainLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-atmos" aria-hidden="true">
        <span className="atmos-orb atmos-orb-a" />
        <span className="atmos-orb atmos-orb-b" />
        <span className="atmos-orb atmos-orb-c" />
      </div>
      <Navbar activeSection="" theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;