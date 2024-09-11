import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../pages/Profile";
import Shirts from "../pages/Shirts";
import Pants from "../pages/Pants";
import Sneakers from "../pages/Sneakers";
// import ProductLayout from "../UI/ProductLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "shirts",
        element: <Shirts />,
      },
      {
        path: "pants",
        element: <Pants />,
      },
      {
        path: "sneakers",
        element: <Sneakers />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function CustomRouterProvider() {
  return <RouterProvider router={router} />;
}
