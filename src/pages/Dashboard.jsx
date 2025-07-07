import Sidebar from "../components/Sidebar";
import Content from "../components/content";
import PerformanceChart from "../components/PerformanceChart";
import Tasks from "../components/Tasks";
import AppDrawer from "../components/AppDrawer";

function Dashboard() {
  return (
    <div className="min-h-screen flex ">
      <Sidebar />
      <div className="w-full px-20">
        <Content />
        <PerformanceChart />
        <Tasks />
      </div>
      <AppDrawer />
    </div>
  );
}

export default Dashboard;
