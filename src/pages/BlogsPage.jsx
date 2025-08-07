import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-4 border p-4">
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
          <div className="flex gap-4 mt-2">
            <Link to={`/blog/${blog._id}`} className="text-blue-500 underline">View</Link>
            <Link to={`/edit-blog/${blog._id}`} className="text-green-500 underline">Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
