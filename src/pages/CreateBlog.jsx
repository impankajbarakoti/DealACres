import React, { useState } from "react";
import api from "../api";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/blogs", { title, content });
      alert("Blog created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating blog.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create</button>
    </form>
  );
};

export default CreateBlog;
