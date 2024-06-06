import React, {  useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import Profile from "../Components/Profile";
import axios from "axios";
import Comments from "./Comment";

const baseURLPosts = "http://localhost:8000/assets/posts/";
// const baseURLPfp = "http://localhost:8000/assets/";
// const obj = [
//   {
//     name: "like",
//     count: 0,
//     icon: <FaRegHeart />,
//   },
//   {
//     name: "comment",
//     count: 0,
//     icon: <GoComment />,
//   },
//   {
//     name: "share",
//     icon: <IoShareSocialOutline />,
//   },
// ];

function Feed({ post }) {
  const [UIpost, setUIPost] = useState(post);
  const [showComment, setShowComment] = useState(false);

  const { Content, author, Image, Likes, Comment, _id, isLiked, createdAt } =
    UIpost;
  const [liked, setLiked] = useState(isLiked);

  const date = new Date(createdAt);
  const st = new Date();
  const s = st.getTime() - date.getTime();
  const hours = Math.floor(s / (1000 * 60 * 60));

  const toggleShowComments = () => {
    setShowComment(!showComment);
  };

  const updateLikePost = async (id) => {
    const token = localStorage.getItem('token')
    const res = await axios.patch(
      `http://localhost:8000/post/${id}/like`,
      { name: "Rishi" },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearear ${token}`
        },
      }
    );
    const resData = await res.data;

    setLiked(!liked);
    setUIPost(resData?.post);
  };

  return (
    <>
      <div className="feed w-full max-w-full p-4 bg-gray-800 rounded-2xl mb-3 text-wrap">
        <Profile
          img={author?.pfp}
          Name={author?.firstName}
          handle={author?.handle}
          isComment={false}
        />
                <pre className="text mt-2 text-sm text-wrap font-poppins tracking-wide">
          {Content}{" "}
        </pre>
        {Image ? (
          <div className="img-con flex justify-center items-center  mt-2 overflow-hidden bg-gray-800">
            <img
              src={baseURLPosts + Image}
              alt=""
              className="object-contain bg-gray-800"
            />
          </div>
        ) : null}



        <div className="likes flex pt-3 h-8 ">
          <div className="ele text-2xl font-light cursor-pointer flex ">
            <button
              className="text-xl flex items-center"
              onClick={() => {
                updateLikePost(_id);
              }}
            >
              {liked ? (
                <FaHeart className=" text-red-500 animate-[pulse_0.2s_ease-in-out_1]" />
              ) : (
                <FaRegHeart className="animate-[pulse_0.2s_ease-in-out_1]" />
              )}
            </button>
            <button className="ml-4 text-xl flex items-center">
              {<GoComment onClick={toggleShowComments} />}
            </button>
            <button className="ml-4 text-xl flex items-center">
              {<IoShareSocialOutline />}
            </button>
          </div>
        </div>

        <div className="mt-3 likecount text-sm font-poppins font-light">
          <span className=""></span>
          {Object.keys(Likes).length} likes
          <span className="ml-3 text-gray-500">{hours} hours ago</span>
        </div>
        <div>{showComment ? <Comments i_comments={Comment} post_id={_id} /> : null}</div>

        {/* <br /> */}
      </div>
    </>
  );
}

export default Feed;
