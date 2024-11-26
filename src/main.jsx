import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import Context from "./utils/Context.jsx";
import Create from "./components/Create.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    ErrorBoundary: <Error />,
  },
  {
    path: "/details/:id",
    element: <Details />,
    ErrorBoundary: <Error />,
  },

  {
    path: "/create",
    element: <Create />,
    ErrorBoundary: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Context>
);
