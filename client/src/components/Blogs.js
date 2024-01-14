import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blogs")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  const id = localStorage.getItem("userId");

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user}
            title={blog.title}
            description={blog.desc}
            imageURL={blog.img}
            userName={blog.user}
            date={new Date(blog.date).toLocaleDateString()}
            loggedInUserId={id}
          />
        ))}
    </div>
  );
};

export default Blogs;
