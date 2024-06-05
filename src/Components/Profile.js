import React from "react";
// import * as th from "../assets/pfp.jpg";
import Avatar from "../Style/AvatarCon";

const Profile = ({ img, Name, handle, isComment }) => {
  const baseUrl = "https://backedconnectopia.onrender.com/assets/"
  return (  
    <div>
      {" "}
      <div className="user-info border-b-gray-500 flex gap-3 pb-2">
        <Avatar img={baseUrl + img} />
        <div className="info flex items-center">
          {!isComment ? (
            <span className="name text-base cursor-pointer mr-3">{Name}</span>
          ) : null}

          <span className=" handel text-base text-gray-500 cursor-pointer hover:underline-offset-1 hover:underline">
            {handle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
