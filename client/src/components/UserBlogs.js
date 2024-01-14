import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogs/user/${id}`
        );
        const data = await res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    sendRequest().then((data) => setUser(data.user));
  }, [id]);

  return (
    <div className="container">
      {user &&
        user.blogs.map((blog, index) => (
          <div key={index}>
            <Blog
              id={blog._id}
              isUser={true}
              title={blog.title}
              description={blog.desc}
              imageURL={blog.img}
              userName={user.name}
              date={new Date(blog.date).toLocaleDateString()}
            />
          </div>
        ))}
    </div>
  );
};

export default UserBlogs;
