import React from "react";
import axios from "axios";

const DeleteButton = ({ blogId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${blogId}`);
      onDelete();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
