import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserPanel from "./UserPanel";
import MsgPanel from "./MsgPanel";
import CreatePost from "./CreatePost";
import FeedPanel from "./FeedPanel";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getOnUser = async () => {
    console.log("send");
    await axios
      .get("https://backedconnectopia.onrender.com/user", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        setUser(data.data.user);
      })
      .catch((err) => {
        console.log(err);
        navigate("../login");
      });
  };

  useEffect(() => {
    getOnUser();
  }, []);

  return (
    <>
      {!user ? (
        <div>Loading</div>
      ) : (
        <div className="main-con px-5 lg:px-16 pt-4 bg-gray-900 text-white font-poppins  w-full">
          <Navbar />
          <div className="flex flex-col justify-between lg:flex-row w-full overflow-hidden min-h-[100vh] ">
            <UserPanel user={user} />
            <FeedPanel key={user._id} user={user}/>
            
            {/* <div className=" flex flex-col w-full">
              <CreatePost img={user.pfp} />
              <FeedPanel />
            </div> */}
            <MsgPanel />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
