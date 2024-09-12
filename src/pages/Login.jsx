import { useEffect, useState } from "react";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    const res = localStorage.getItem("user");
    setData(JSON.parse(res));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100dvh] bg-transparent flex justify-center items-center">
      <div className="bg-sky-100 shadow-md  w-[30rem] h-96 py-5 px-4 ">
        <h1 className="uppercase text-[3em] text-center mb-2">el5azna</h1>
        <form
          className="flex flex-col gap-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col justify-between gap-4">
            <Input
              type={"email"}
              state={email}
              setState={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type={"password"}
              state={password}
              setState={(e) => setPassword(e.target.value)}
            ></Input>
          </div>
          <button
            className="bg-sky-600 text-sky-50 p-3 text-lg font-semibold text-center disabled:cursor-not-allowed"
            disabled={email !== data[0]?.email || password !== data[0]?.password}
            onClick={() => {
              navigate("shirts");
              localStorage.setItem("currentUser", JSON.stringify(data[0]));
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
