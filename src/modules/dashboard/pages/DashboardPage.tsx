import DashboardOverview from "../components/DashboardOverview";
import DashboardStats from "../components/DashboardStats";
import RecentActivities from "../components/RecentActivities";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

        <p className="mt-1 text-slate-500">Welcome back, Pranjal 👋</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <DashboardOverview />

        <RecentActivities />
      </div>
    </div>
  );
};

export default DashboardPage;
