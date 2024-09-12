import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="border border-b p-5 flex justify-between items-center">
      <h1 className="text-5xl">EL5AZNA</h1>
      <button
        onClick={() => {
          localStorage.setItem("currentUser", JSON.stringify({}));
          navigate("/");
        }}
        className="py-3 px-5 bg-sky-600 text-white text-xl"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
