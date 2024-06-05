import React from "react";
import { FaConnectdevelop, FaM } from "react-icons/fa6";
import { SiVirginmedia } from "react-icons/si";
import Dropdown from "../Style/Dropdown";
import { FaHome } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const menu = [
  {
    menuName : 'Home',
    img : <FaHome />,
    href : ''
  },
  {
    menuName : 'Explore',
    img : <SiHashnode />,
    href : ''
  },{
    menuName : 'Notification',
    img : <IoMdNotifications />,
    href : ''
  },{
    menuName : 'Profile',
    img : <FaUserCircle />,
    href : ''
  }
]

function Navbar() {
  return (
    
    <div className="navbar mb-3 bg-gray-800 bg-opacity-70 rounded-2xl h-11 flex justify-between items-center px-3 backdrop-blur-sm z-50 sticky top-4">
      <div className="logocon flex text-xl items-center cursor-pointer">
        <SiVirginmedia className="text-4xl mr-4 p-1 rounded-full bg-gray-900 font-bold  text-cyan-400" />
        <div className="name invisible text-base md:visible   " >Connectopia</div>
      </div>
      <div className="options sm:hidden">
        <Dropdown values={menu} />
      </div>
      {/* <div className=" w-40 overflow-hidden bg-gray-700 rounded-full items-center flex px-2  hover:ring-1"> 
        <input type="text" placeholder="Search..." className="pl-4 text-base py-1 border-0 outline-none bg-gray-700 w-full placeholder:text-base "></input>
        <FaMagnifyingGlass className="" />
      </div> */}
      <div className="option    hidden sm:flex">
        {menu.map((value) => {
          return(<div key={value.menuName} className=" text-white   flex text-xl mx-3 p-1 hover:bg-gray-700 hover:rounded-full rounded-full hover:ring-2 cursor-pointer ">{value.img}</div>)
        } )}
      </div>
    </div>
  );
}

export default Navbar;
