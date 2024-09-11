import { NavLink } from "react-router-dom";
const links = [
  { name: "Shirts", path: "/shirts" },
  { name: "Pants", path: "/pants" },
  { name: "Sneakers", path: "/sneakers" },
  { name: "Profile", path: "/profile" },
];
function sideBar() {
  return (
    <ul className="p-1 border w-60 flex flex-col h-full">
      {links.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `my-2 p-2 rounded ${
              isActive ? "bg-sky-900 text-white" : "hover:bg-sky-100"
            }`
          }
          key={link.name}
        >
          {link.name}
        </NavLink>
      ))}
    </ul>
  );
}

export default sideBar;
