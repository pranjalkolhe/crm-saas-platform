import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import router from "../routes/index";

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster richColors position="top-right" expand />
    </>
  );
}

export default App;
