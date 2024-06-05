import React, { useState } from "react";
import Profile from "../Components/Profile";
import axios from "axios";
import AvatarCon from "./AvatarCon";

const Comment = ({ post_id, i_comments }) => {
  const [comment, setComment] = useState("");
  const [comments , setComments] = useState(i_comments);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment) {
      console.log("Can't Post an Empty Comment");
    } else {
      const res = await axios.patch(
        `https://backedconnectopia.onrender.com/post/${post_id}/comment`,
        { text: comment },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.data;
      // console.log(resData.post.Comment);
      setComments(resData.post.Comment);
      // console.log("res comment : "  + comment)
      setComment("");
      // console.log(comment);
    }
  };

  return (
    <div className="comments mt-2 ">
      <form onSubmit={handleSubmit}>
        <div className="ip flex justify-between gap-2">
          <input
            type="text"
            placeholder="Add a comment "
            className=" bg-gray-700 w-full p-2 rounded text-sm outline-none text-white"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          {/* {console.log(comment)} */}
          <button
            className="ml-2 border p-2 rounded border-gray-700"
            type="Submit"
          >
            POST
          </button>
        </div>
      </form>
      <div className="posts">
        {comments.map((comment) => {
          // console.log(comment);
          return (
            <div className="post my-2 border-b-2 border-b-gray-500 py-2" key={comment._id}>
              <Profile
                img={comment.pfp}
                handle={comment.a_handle}
                isComment={true}
              />
              <div className="ml-3 text-sm bg-gray-700 p-2 rounded-sm">{comment.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
