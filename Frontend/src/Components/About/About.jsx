import React from "react";

function About() {
  return (
    <>
      <div class="w-full">
 <div class="flex bg-white h-screen">
    <div class="flex items-center text-center bg-gray-100 lg:text-left px-8 md:px-12 lg:w-1/2">
      <div class="bg-gray-100 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">About IFFIONEX</h1>
          <p class="text-lg text-gray-700 mb-6">
            Welcome to IFFIONEX, your go-to destination for the latest in technology news, insights, and reviews. At IFFIONEX, we're passionate about exploring the ever-evolving world of technology and sharing our knowledge with our readers.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            Our team of experienced writers and tech enthusiasts is dedicated to providing you with high-quality content covering a wide range of topics including software, hardware, gadgets, programming, cybersecurity, artificial intelligence, and much more.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            Whether you're a seasoned tech professional or a curious beginner, IFFIONEX has something for everyone. Stay updated with the latest trends, discover tips and tricks, and dive deep into the fascinating world of technology with us.
          </p>
          <p class="text-lg text-gray-700">
            Thank you for visiting IFFIONEX. We hope you enjoy your time here and find our content informative and inspiring.
          </p>
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2  bg-gray-100">
      <div class="w-[80%] h-[80%] object-cover rounded-2xl mt-10" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div class="h-full bg-gray-500 rounded-2xl opacity-50"></div>
      </div>
    </div>
 </div>
</div>
<hr className="border-2 border-gray-200" />
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              CEO, IFFIONEX COMPLEX
            </h2>
            <p className="text-gray-500">Arfan Abid</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
