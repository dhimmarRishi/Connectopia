import React from "react";
import FriendProfile from "../Style/FriendProfile.js";

const sideUsers =[
  {
    name : "Beena",
    handle : "@beena",
  },
  {
    name : "Pankaj",
    handle : "@pankaj",
  },
  {
    name : "Yug",
    handle : "@yugu",
  },

]

const MsgPanel = () => {
  return (
    <>
      <div className="msgPanel h-full mt-3 bg-gray-800 rounded-2xl sm:ml-3 overflow-hidden flex gap-2 flex-col justify-center items-center lg:max-w-[300px] max-w-full lg:w-[1000px] ">
        {
          sideUsers.map((friend) => {
            return(<FriendProfile friend={friend} key={friend.handle}/>)
          })
        }
        {/* <FriendProfile />
        <FriendProfile /> */}
        {/* <FriendProfile /> */}
      </div>
    </>
  );
}

export default MsgPanel;
