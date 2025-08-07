// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Create blog
router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Get single blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
});

// Update blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete blog (optional)
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
