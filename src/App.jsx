// import dashboardData from "./data/products";
// import { useState, useEffect } from "react";
import CustomeRouterProvider from "./Providers/RouterProvider";

function App() {
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
