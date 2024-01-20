

import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ErrorBoundary from "../components/ErrorBoundary";
import LayoutOne from "../layouts/LayoutOne";
import Dashboard from "../pages/Dashboard";
import LayoutTwo from "../layouts/LayoutTwo";



export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorBoundary />,
      children: [
        {
            path: "/",
            element: <Homepage />,
        },
        {
          path: "/layout-one",
          element: <LayoutOne />,
          errorElement:<ErrorBoundary />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "/layout-two",
          element: <LayoutTwo />,
          errorElement:<ErrorBoundary />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
    
]);