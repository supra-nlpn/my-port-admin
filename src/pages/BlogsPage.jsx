import React from "react";
import AddBlogs from "../components/AddBlogs";
import BlogList from "../components/BlogList";

function BlogsPage() {
  return (
    <div>
      <h2>Blogs</h2>
      <AddBlogs />
      <BlogList />
    </div>
  );
}

export default BlogsPage;