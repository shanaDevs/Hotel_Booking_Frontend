/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

function UserTag(props) {
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setName(`${res.data.user.Firstname} ${res.data.user.Lastname}`);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Token after logout:", localStorage.getItem("token"));
  };

  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-2">
      <img src={props.imageLink} className="rounded-[100%] w-[75px] h-[75px]" alt="User" />
      <span className="text-white ml-[10px] text-xl">{name}</span>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default UserTag;
