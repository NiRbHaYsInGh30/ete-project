import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = ({ title, description, imageURL, userName, isUser, id, date }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blogs/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/"));
  };

  return (
    <div className="mx-80 my-4">
      <div className="border rounded-md">
        <div className="ml-6 my-2 flex items-center">
          <p className="text-2xl font-medium">{title}</p>
          {isUser && (
            <div className="flex items-center justify-center ml-auto mr-4 gap-2">
              <button
                className="font-medium px-2 py-1 rounded-md bg-green-600 text-white"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="font-medium px-2 py-1 rounded-md bg-red-600 text-white"
                onClick={handleDelete}
              >
                Delete Forever
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <img
            className="object-cover w-full h-80"
            src={imageURL}
            alt="Blog Banner"
          />
        </div>

        <div className="px-4 py-2">
          <span className="text-md">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Post by {userName}</p>
              {date && <p className="font-semibold">Posted on {date}</p>}
            </div>
            <p>{description}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
