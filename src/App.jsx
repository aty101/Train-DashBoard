import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import { userData } from "./data/userData";
import { shirtsData } from "./data/shirtsData";
import Temp from "./pages/temp";
function App() {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("shirts", JSON.stringify(shirtsData));
  }, []);
  const router = createBrowserRouter([
    {
      path: "temp",
      element: <Login></Login>,
    },
    {
      path: "/",
      element: <Temp></Temp>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
