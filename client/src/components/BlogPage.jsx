import React, { useEffect, useState, lazy, Suspense } from "react";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
const LazyBlogCard = lazy(() => import("./BlogCard"));

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState();

  useEffect(() => {
    async function fetchBlogs() {
      let url = `${import.meta.env.VITE_REACT_APP_API_URL}blogs?page${currentPage}&limit${pageSize}`;
      // filter by category
      if (selectedCategory) {
        url += `&category${selectedCategory}`
      }
      const response = await fetch(url);
      const data = await response.json();
      setTotalBlogs(data?.length);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {filteredBlogs.map((blog) => (
              <LazyBlogCard key={blog.id} blog={blog} />
            ))}
          </Suspense>
        </div>
        <div>
          {/* sidebar component */}
          <SideBar/>
        </div>
      </div>
      {/* pagination */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} totalBlogs={totalBlogs}/>
      </div>
    </div>
  );
};

export default BlogPage;
