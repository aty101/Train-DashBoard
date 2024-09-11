import Header from "../UI/Header";
import SideBar from "../UI/SideBar";
import ProductLayout from "../UI/ProductLayout";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="h-full">
      <Header />
      <main className="flex h-full bg-gray-200">
        <aside className="h-full bg-white">
          <SideBar />
        </aside>
        {location.pathname !== "/profile" ? <ProductLayout /> : null}
      </main>
    </div>
  );
}

export default Home;
