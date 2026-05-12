import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Jan",
    revenue: 4000,
  },
  {
    month: "Feb",
    revenue: 3000,
  },
  {
    month: "Mar",
    revenue: 5000,
  },
  {
    month: "Apr",
    revenue: 4500,
  },
  {
    month: "May",
    revenue: 6000,
  },
  {
    month: "Jun",
    revenue: 5500,
  },
];

const DashboardOverview = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Sales Overview</h2>

          <p className="mt-1 text-sm text-slate-500">
            Monthly revenue performance
          </p>
        </div>

        <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200">
          Export
        </button>
      </div>

      <div className="mt-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" fill="#3B82F6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardOverview;
