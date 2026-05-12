import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import LeadsPage from "@/modules/leads/pages/LeadsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/leads",
        element: <LeadsPage />,
      },
    ],
  },
]);

export default router;
