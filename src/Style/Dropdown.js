import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function Dropdown({ values }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  function setMenuOpen() {
    setToggleMenu(true);
  }
  function setMenuClosed() {
    setToggleMenu(false);
  }

  return (
    <div className="dropdown   ">
      {/* {console.log(values)} */}
      <div className="iconcov   ">
        {!toggleMenu ? (
          <MdOutlineMenu
            className="cursor-pointer text-xl"
            onClick={setMenuOpen}
          />
        ) : (
          <MdCancel
            className="cursor-pointer rounded-full text-xl ring-1 ring-white"
            onClick={setMenuClosed}
          />
        )}
      </div>
      {toggleMenu ? (
        <div className="menu border     border-sky-800 bg-gray-900 rounded flex flex-col justify-center items-center absolute top-12 right-3 transition ">
          {values.map((ele) => {
            return (
              <div
                key={ele.menuName + "-con"}
                className="menu-ele    hover:bg-gray-700 hover:ring-1 hover:ring-sky-400 flex w-full text-white items-center p-3 text-sm cursor-pointer"
              >
                <span
                  key={ele.menuName + "-icon"}
                  className="ml-2 mr-4 text-xl"
                >
                  {ele.img}
                </span>
                <span key={ele.menuName} className="pt-1">
                  {ele.menuName}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
