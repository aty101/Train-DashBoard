import { useEffect } from "react";

// import dashboardData from "./data/products";
// import { useState, useEffect } from "react";
import CustomeRouterProvider from "./Providers/RouterProvider";

import { userData } from "./data/userData";
import { shirtsData } from "./data/shirtsData";

function App() {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("shirts", JSON.stringify(shirtsData));
  }, []);

  // const [data, setData] = useState(() => {
  //   const storedData = localStorage.getItem("dashboardData");
  //   return storedData ? JSON.parse(storedData) : dashboardData;
  // });

  // useEffect(() => {
  //   const dataJSON = JSON.stringify(data);
  //   localStorage.setItem("dashboardData", dataJSON);
  // }, [data]);

  return <CustomeRouterProvider />;
}

export default App;
