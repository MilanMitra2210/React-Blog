import React, { useEffect, useState, lazy, Suspense } from "react";
const LazyBlogCard = lazy(() => import("./BlogCard"));

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8"> {/* Adjust padding as needed */}
      <div>Page Category</div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <Suspense fallback={<div>Loading...</div>}>
          {blogs.map((blog) => (
            <LazyBlogCard key={blog.id} blog={blog} />
          ))}
        </Suspense>
      </div>
      {/* pagination */}
      <div>Pagination</div>
    </div>
  );
};

export default BlogPage;
