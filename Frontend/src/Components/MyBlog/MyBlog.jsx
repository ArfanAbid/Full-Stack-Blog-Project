import React, { useEffect, useState } from 'react';
import api from '../../Utils/api';
import { NavLink } from 'react-router-dom';

function MyBlog() {
 const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    api("http://127.0.0.1:8000/blog/list/")
      .then((response) => {
        // console.log(response);
        return response.json()})
      .then((data) => {
        console.log(data)
        setBlogs(data.data)}) // Update the state with the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 


 return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <br />
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">Your Blogs : </h2>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          {blogs.map((blog) => (
            <article key={blog.uid} className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              style={{ backgroundImage: `url('http://127.0.0.1:8000/${blog.image}')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                 <NavLink 
                    to={`/detail/${blog.uid}`}
                    className="text-white text-2xl font-bold text-center"
                 >
                    <span className="absolute inset-0"></span>
                    {blog.title}
                 </NavLink>
                </h3>
                {/* {blog.content.substring(0, 45)}... */}
              </div>
            </article>
          ))}
        </section>
      </article>
    </section>
 );
}

export default MyBlog;
