import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import Temp from "./pages/Temp";
import { userData } from "./data/userData";
import { shirtsData } from "./data/shirtsData";
function App() {
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("shirts", JSON.stringify(shirtsData));
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "temp",
      element: <Temp></Temp>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
