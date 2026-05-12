import Button from "@/components/ui/Button";
const activities = [
  "Sarah closed Nike deal",
  "New lead added by Rahul",
  "Proposal sent to Spotify",
  "Meeting scheduled with Adobe",
];

const RecentActivities = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">Recent Activities</h2>

        <Button
          variant="secondary"
          className="text-sm font-medium text-blue-600"
        >
          View All
        </Button>
      </div>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => (
          <div key={activity} className="flex items-start gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

            <p className="text-sm text-slate-600">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
