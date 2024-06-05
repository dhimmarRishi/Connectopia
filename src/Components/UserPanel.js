import React from "react";
import * as bgimg from "../assets/default-bg.jpg";
// import * as pfp from "../../public/assets/pfp.jpg";
// import * as th from "../../public/assets/th.jpeg";
import AvatarCon from "../Style/AvatarCon";

function UserPanel({user}) {
  const baseURL = 'https://backedconnectopia.onrender.com/assets/';

  return (
    <div className="userPanel mr-4 mt-3 bg-gray-800 w-full h-full rounded-2xl flex flex-col justify-between items-center overflow-hidden min-w-[270px] lg:max-w-[300px] max-w-full  sm:hidden md:hidden  lg:flex">
      <div className="bgimg overflow-hidden h-24 ">
        {console.log(baseURL + user.pfp)}
        <img className="" src={bgimg} alt="..."></img>
      </div>

      <div className="user mt-10 mb-5 relative z-10">
        <div className="con absolute top-[-64px] md:left-[25px] left-[30px]">
          <AvatarCon img={baseURL + user.pfp} className="" />
        </div>
        <div className="info mb-6 text-center mt-3">
          <div className="name mb-1 text-sm sm:text-xl">{user.firstName + " " + user.lastName}</div>
          <div className="handle mb-1 text-sm text-gray-400">{user.handle}</div>
          <div className="line text-sm text-gray-400">
            {user.line?.line}
          </div>
        </div>
        <div className="follow flex h-20 border-t-2 border-gray-500 border-b-2 items-center ">
            <div className="c1 text-center w-full  text-base">{user?.friends?.length}<div className="text-sm text-gray-400">Connections</div></div>
            {/* <div className="c1 text-center w-full text-base">9999<div className="text-sm text-gray-400">Following</div></div> */}
        </div>
        <div className="link flex  text-sm  h-14 items-center justify-center  hover:bg-gray-800 cursor-pointer hover:underline hover:underline-offset-2 ">
            My Profile
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
