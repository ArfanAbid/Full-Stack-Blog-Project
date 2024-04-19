import React, { useState, useEffect } from 'react';

function Home() {
    const [blogs, setBlogs] = useState([]); // Initialize state to store fetched blogs
   
    useEffect(() => {
       // Fetch data from an API
       fetch('http://127.0.0.1:8000/blog/view/')
         .then((response) => response.json())
         .then((data) => setBlogs(data)) // Update the state with the fetched data
         .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the initial render
   
    return (
       <>
         <section className="text-gray-600 body-font">
           <div className="container px-5 py-24 mx-auto">
             <div className="flex flex-wrap w-full mb-20">
               <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">IFFIONEX Blogs: </h1>
                 <div className="h-1 w-20 bg-blue-500 rounded"></div>
               </div>
               <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon
                 brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard
                 of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
             </div>
             <div className="flex flex-wrap -m-4">
               {blogs.map((blog) => (
                 <div key={blog.uid} className="xl:w-1/4 md:w-1/2 p-4">
                   <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6"
                       src={blog.image} alt={blog.title} />
                    <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">{blog.ownerName}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{blog.title}</h2>
                    <p className="leading-relaxed text-base">{blog.content.substring(0, 100)}...</p>
                    <a href={`/blog/${blog.id}`}>
                       <h3 className="tracking-widest text-blue-500 text-sm font-medium title-font hover:underline">
                         Read More</h3>
                    </a>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
       </>
    );
   }
   
   export default Home;
   