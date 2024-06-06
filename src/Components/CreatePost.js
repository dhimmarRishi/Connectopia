import React, { useState } from "react";
import Avatar from "../Style/AvatarCon";
import { MdAddPhotoAlternate } from "react-icons/md";
import { SiVirginmedia } from "react-icons/si";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const CreatePost = ({ img, updateContent }) => {
  const baseURL = "https://backedconnectopia.onrender.com/assets/";
  const token = localStorage.getItem('token')
  
  const handlePostSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("text", data.text);
    formData.append("img", data.img);
    const res = await axios.post("http://localhost:8000/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
    });

    const resData = await res.data;
    console.log(resData);

    await updateContent();
    console.log(JSON.stringify(data));
  };

  const schema = yup.object().shape({
    text: yup.string().required("Please provide some content"),
    // img: yup.mixed()
  });

  const formik = useFormik({
    initialValues: {
      text: "",
      img: null,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      handlePostSubmit(values);
      actions.resetForm();
    },
  });

  return (
    <div className=" mt-3 bg-gray-800 p-3 rounded-2xl flex flex-col justify-center gap-4 md:flex-row">
      <div className="left rounded-full hidden md:flex md:justify-start md:flex-col">
        <Avatar img={img} />
      </div>
      <div className="right ml-1 w-full mr-3">
        <form onSubmit={formik.handleSubmit}>
          <textarea
            name="text"
            value={formik.values.text}
            onChange={formik.handleChange}
            placeholder="Create a new post ..."
            className=" bg-gray-700 focus:bg-gray-700 font-poppins rounded text-white outline-none px-2 py-3 text-sm w-full object-contain resize-y h-11"
          />
          {formik.errors.text ? (
            <div className="err">{formik.errors.text}</div>
          ) : null}
          <div className="buttons mt-3 flex  justify-between">
            <input
              type="file"
              placeholder="Images"
              id="post-image"
              // accept="images/*"
              className=" text-white mr-4 flex items-center file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              name="img"
              // value={formik.values.img}
              onChange={(event) => {
                formik.setFieldValue("img", event.currentTarget.files[0]);
              }}
            />
            <button
              type="submit"
              className="flex h-10 text-sm px-3 items-center border  border-white rounded-full"
            >
              <SiVirginmedia className="text-xl mr-2 text-sky-800" />
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
