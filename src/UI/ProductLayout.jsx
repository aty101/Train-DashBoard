import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <div className="m-3 w-full rounded">
      <div className="bg-white rounded p-3 text-2xl font-semibold">
        <Outlet />
      </div>
      <div className="bg-white my-2 h-80 rounded p-3">
        hiiiii
      </div>
    </div>
  );
}

export default ProductLayout;
