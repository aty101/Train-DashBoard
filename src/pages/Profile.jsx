import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
function Profile() {
  const [data, setData] = useState("");
  useEffect(() => {
    const res = localStorage.getItem("user");
    setData(JSON.parse(res));
  }, []);

  return (
    <div className="w-full m-2 flex flex-col gap-2">
      <div className=" bg-white rounded p-2">
        <h1 className="text-2xl font-semibold">Profile</h1>
      </div>
      <div className="bg-white rounded p-2 flex justify-center flex-col gap-3">
        <FontAwesomeIcon icon={faCircleUser} size="6x" />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{data[0]?.name}</h2>
          <p className="text-lg font-semibold">{data[0]?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
