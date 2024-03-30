import React from "react";
import {  FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

  return (
    <Link className="p-5 shadow-lg rounded cursor-pointer hover:shadow-2xl" to={`/${blog.id}`}>
      <div>
        <img src={blog.image} alt="" className="w-full" />
      </div>
      <h3 className="mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer">{blog.title}</h3>
      <p className="mb-2 text-gray-600"><FaUser className="inline-flex items-center mr-2"/>{blog.author}</p>
      <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
    </Link>
  );
};

export default BlogCard;
