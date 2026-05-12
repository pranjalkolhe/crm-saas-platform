import StatCard from "@/components/shared/StatCard";

const stats = [
  {
    title: "Total Revenue",
    value: "$84,320",
    color: "bg-blue-500",
  },
  {
    title: "Total Leads",
    value: "1,284",
    color: "bg-purple-500",
  },
  {
    title: "Conversions",
    value: "68%",
    color: "bg-green-500",
  },
  {
    title: "Customers",
    value: "420",
    color: "bg-orange-500",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
