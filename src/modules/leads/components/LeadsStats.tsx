import Card from "@/components/ui/Card";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Target,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "1,284",
    growth: "+12.5%",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Qualified",
    value: "568",
    growth: "+8.2%",
    icon: Target,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Won Deals",
    value: "230",
    growth: "+15.3%",
    icon: BriefcaseBusiness,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Total Value",
    value: "$245K",
    growth: "+18.7%",
    icon: BadgeDollarSign,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const LeadsStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-none text-slate-900">
                  {item.value}
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon size={26} className={item.iconColor} />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                ↑ {item.growth}
              </span>

              <span className="text-sm text-slate-400">this month</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default LeadsStats;
