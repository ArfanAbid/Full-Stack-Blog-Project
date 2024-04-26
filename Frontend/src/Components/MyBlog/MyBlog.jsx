import React, { useEffect, useState } from 'react';
import api from '../../Utils/api';

function MyBlog() {
 const [blogs, setBlogs] = useState([]);

 useEffect(() => {
    const fetchBlogs = async () => {
       try {
         const response = await api('http://127.0.0.1:8000/blog/list/');
         // Check if the response contains a 'data' property and it is an array
         if (response && Array.isArray(response.data)) {
           setBlogs(response.data); // Set the 'data' array to the state
         } else {
           console.error('Expected an array of blogs, but received:', response);
           setBlogs([]); // Set to an empty array if the data is not in the expected format
         }
       } catch (error) {
         console.error('Error fetching blogs:', error);
         setBlogs([]); // Set to an empty array in case of an error
       }
    };
   
    fetchBlogs();
   }, []);

   console.log(blogs); 
   

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
                 <a className="text-white text-2xl font-bold text-center" href="#">
                    <span className="absolute inset-0"></span>
                    {blog.title}
                 </a>
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
