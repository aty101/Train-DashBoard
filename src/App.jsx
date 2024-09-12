import { useEffect } from "react";
import CustomeRouterProvider from "./Providers/RouterProvider";
import { userData } from "./data/userData";
import { shirtsData } from "./data/shirtsData";
import { pantsData } from "./data/pantsData";
import { sneakersData } from "./data/sneakersData";

function App() {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("shirts", JSON.stringify(shirtsData));
    localStorage.setItem("pants", JSON.stringify(pantsData));
    localStorage.setItem("sneakers", JSON.stringify(sneakersData));
  }, []);

  return <CustomeRouterProvider />;
}

export default App;
