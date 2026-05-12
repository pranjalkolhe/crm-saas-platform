import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  ChartColumn,
  CheckSquare,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    path: "/leads",
    icon: Users,
  },
  {
    title: "Deals",
    path: "/deals",
    icon: BriefcaseBusiness,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
