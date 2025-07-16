import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import PerformanceChart from "../components/PerformanceChart";
import Tasks from "../components/Tasks";
import AppDrawer from "../components/AppDrawer";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`min-h-screen flex ${theme == "light" ? "text-black bg-white":"text-white bg-black"}`}>
      <Sidebar theme={theme} setTheme={setTheme} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="transition-all duration-300 w-full px-15"
        style={{ marginLeft: isOpen ? 220 : 80 }}
      >
        <Content theme={theme} setTheme={setTheme} />
        <PerformanceChart theme={theme} setTheme={setTheme} />
        <Tasks theme={theme} setTheme={setTheme} />
      </div>
      <AppDrawer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Dashboard;
