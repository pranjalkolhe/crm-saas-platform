import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Dashboard Page</div>,
      },
    ],
  },
]);

export default router;
