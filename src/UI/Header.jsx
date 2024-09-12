import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="border border-b p-5 flex justify-between items-center">
      <h1 className="text-5xl">EL5AZNA</h1>
      <button
        onClick={() => {
          navigate("/profile");
        }}
        className="p-2 px-5 bg-sky-600 text-white text-xl rounded"
      >
        profile
      </button>
    </div>
  );
}

export default Header;
