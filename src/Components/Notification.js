import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


function Notification({isPositive , msg }) {
  return (
    <div className="notification group flex gap-4 absolute top-4 right-6  bg-white border border-gray-300 shadow-lg py-3 px-4 rounded">
      <div className="text-xl mt-[2px] text-green-400">
        <FaCheckCircle className="" />
      </div>
      <div className="text font-poppins text-center text-sm mt-[2px]">
        {msg}
      </div>
      <div className="text-xl cursor-pointer mt-[2px] text-gray-400 hover:text-gray-700">
        <MdOutlineCancel className="" />
      </div>
    </div>
  );
}

export default Notification;
