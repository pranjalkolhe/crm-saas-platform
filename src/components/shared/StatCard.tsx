type StatCardProps = {
  title: string;
  value: string;
  color: string;
};

const StatCard = ({ title, value, color }: StatCardProps) => {
  return (
    <div
      className={`${color} rounded-2xl p-6 text-white shadow-lg transition-transform hover:scale-[1.02]`}
    >
      <p className="text-sm opacity-80">{title}</p>

      <h2 className="mt-4 text-4xl font-bold">{value}</h2>
    </div>
  );
};

export default StatCard;
