import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./components/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import SingleBlog from "./Pages/SingleBlog";
// this will show all blog activities









function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/create-blog" element={<CreateBlog/>} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
