import React from "react";
import * as th from "../assets/pfp.jpg";
import AvatarCon from "./AvatarCon";
import axios from "axios";

const FriendProfile = ({friend}) => {
  const addFriend = async (e) => {
    const res = await axios.post("https://backedconnectopia.onrender.com/user/friend" , {friend_handle : e.target.value} , {
      withCredentials : true,
      headers : {
        "Content-Type" : "application/json"
      }
    });
    const resData = await res.data;

    console.log(resData);
    // console.log("clicked by : " + e.target.value)
  };
  const handleOnClickEvent = (e) => {
    addFriend(e);
  }

  return (
    <div className="friend w-full ">
      <div className="user-info flex gap-3 p-2  hover:bg-gray-700">
        <AvatarCon img={th} />
        <div className="info sm:flex flex-col pt-2 ">
          <div className="name text-sm cursor-pointer hover:underline">
            {friend?.name}
          </div>
          <div className="handel text-sm text-gray-500 cursor-pointer text-nowrap flex w-full">
            {friend?.handle}
          </div>
        </div>
        <div className="con">
          <button
            className="bg-white p-1 rounded-full text-gray-900 px-3 py-1 mt-3 cursor-pointer text-sm"
            value={friend?.handle}
            onClick={handleOnClickEvent}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
