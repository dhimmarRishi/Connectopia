import React, { useEffect, useState } from "react";
import Feed from "../Style/Feed";
import axios from "axios";
import CreatePost from "./CreatePost";

const FeedPanel = ({ user }) => {
  // const con =
  //   "In the heart of a bustling metropolis😂😂😂, beneath the neon glow of towering skyscrapers, lies a hidden sanctuary of tranquility. Here, amidst the chaos of the city streets, time seems to slow as the gentle rustle of leaves in a secret garden whispers ancient tales of forgotten dreams. Serenity reigns  in this urban oasis, offering solace to weary souls seeking refuge from the relentless pace of modern life.";
  const baseURL = "http://localhost:8000/assets/";

  const [content, setContent] = useState([]);

  async function updateContent() {
    const token = localStorage.getItem('token')
    console.log("Updating the content");
    await axios
      .get("http://localhost:8000/post", {
       headers : {
        "Authorization": `Bearer ${token}`
       }
      })
      .then((res) => {
        setContent(res.data.posts.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    updateContent();
  }, []);

  return (
    <div className="flex flex-col ">
      <CreatePost img={baseURL + user.pfp} updateContent={updateContent} />
      {content.length == 0 ? (
        <div>Loading</div>
      ) : (
        <div className="feedPanel mt-3 bg-gray-900 rounded-2xl flex flex-col justify-between items-center overflow-y-scroll overflow-x-hidden sm:h-[100vh] min-w-[30%] max-w-[790px] w-full">
          {content.map((ele) => {
            return <Feed post={ele} key={ele._id} />;
          })}
        </div>
      )}
    </div>
  );
};
export default FeedPanel;
