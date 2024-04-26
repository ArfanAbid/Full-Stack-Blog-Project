import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';

function Home() {
  const [blogs, setBlogs] = useState([]); // Initialize state to store fetched blogs
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Fetch data from an API
    fetch("http://127.0.0.1:8000/blog/view/")
      .then((response) => {
        console.log(response);
        return response.json()})
      .then((data) => {
        console.log(data)
        setBlogs(data)}) // Update the state with the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    const result =localStorage.getItem("isAuthenticated");
    setIsAuthenticated(result);

  }, [localStorage.getItem("isAuthenticated")])
  

  return (
    <>
    
      <div class=" bg-gray-50 flex items-center ">
        <section
          class="bg-cover bg-center py-32 w-full "
          style={{
            backgroundImage: "url('https://source.unsplash.com/random')",
          }}
        >
          <div class="container mx-auto text-left px-8 text-white">
            <div class="flex items-center">
              <div class="w-1/2 ">
                <h1 class="text-5xl font-medium mb-6">Welcome to IFFIONEX</h1>
                <p class="text-xl mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                {isAuthenticated ?(
                  <p></p>
                  )
                : (
                  <NavLink to="/login"
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                  Get Started With Creating Your Own Blogs
                </NavLink>
                  )}

              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font">
 <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          IFFIONEX Blogs:
        </h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably
        haven't heard of them man bun deep jianbing selfies heirloom prism
        food truck ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {blogs.map((blog) => (
        <div key={blog.uid} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src={blog.image}
              alt={blog.title}
            />
            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font mb-2">
              {blog.ownerName}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              {blog.title}
            </h2>
            <p className="leading-relaxed text-base">
              {blog.content.substring(0, 100)}...
            </p>
            {/* <a href={`/blog/${blog.uid}`} className="text-blue-500 hover:text-blue-700">
              Read More
            </a> */}
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
