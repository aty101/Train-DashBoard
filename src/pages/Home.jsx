import Header from "../UI/Header";
import SideBar from "../UI/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";

function Home() {
  const location = useLocation();

  return (
    <div className="h-full">
      <Header />
      <main className="flex h-full bg-gray-200">
        <aside className="h-full bg-white">
          <SideBar />
        </aside>
        {location.pathname !== "/profile" ? <Outlet /> : <Profile />}
      </main>
    </div>
  );
}

export default Home;
