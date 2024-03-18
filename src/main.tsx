import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import UserForm from "./pages/UserForm.tsx";
import PlanForm from "./pages/PlanForm.tsx";
import AddonForm from "./pages/AddonForm.tsx";

import "./index.css";
import Finish from "./pages/Finish.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/user",
    element: <UserForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/plan",
    element: <PlanForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/addons",
    element: <AddonForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/finish",
    element: <Finish />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
