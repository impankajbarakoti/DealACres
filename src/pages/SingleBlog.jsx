import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{blog.title}</h2>
      <p className="mt-4">{blog.content}</p>
    </div>
  );
};

export default SingleBlog;
