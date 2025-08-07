import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    api.get(`/blogs/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/blogs/${id}`, { title, content });
      alert("Blog updated!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="p-6 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Update</button>
    </form>
  );
};

export default EditBlog;
