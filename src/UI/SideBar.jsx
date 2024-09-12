import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const links = [
  { name: "Shirts", path: "/shirts" },
  { name: "Pants", path: "/pants" },
  { name: "Sneakers", path: "/sneakers" },
];
function sideBar() {
  return (
    <div className="flex flex-col h-5/6 justify-between">
      <ul className="p-1 w-60">
        {links.map((link) => (
          <li key={link.path} className="w-full h-12 my-1">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `rounded w-full px-2 h-full flex items-center ${
                  isActive ? "bg-sky-900 text-white" : "hover:bg-sky-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="border my-96">
        <li
          className="w-full h-12 flex items-center"
          onClick={localStorage.setItem("currentUser", JSON.stringify({}))}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
          <NavLink
            to="/"
            className="rounded w-full px-2 h-full flex items-center"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default sideBar;
