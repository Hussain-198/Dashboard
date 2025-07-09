import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/content";
import PerformanceChart from "../components/PerformanceChart";
import Tasks from "../components/Tasks";
import AppDrawer from "../components/AppDrawer";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="transition-all duration-300 w-full px-15"
        style={{ marginLeft: isOpen ? 220 : 80 }}
      >
        <Content />
        <PerformanceChart />
        <Tasks />
      </div>
      <AppDrawer />
    </div>
  );
}

export default Dashboard;
