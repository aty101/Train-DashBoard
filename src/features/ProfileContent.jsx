import { useEffect, useState } from "react";
function ProfileContent() {
  const [data, setData] = useState("");
  useEffect(() => {
    const res = localStorage.getItem("user");
    setData(JSON.parse(res));
  }, []);

  return (
    <div className="h-full flex flex-col m-3 gap-3 w-full">
      <div className="w-full flex flex-col bg-white  justify-between items-center">
        <p>{data[0]?.name}</p>
        <p>{data[0]?.email}</p>
      </div>
    </div>
  );
}

export default ProfileContent;
