import React from 'react'
import { NavLink,Link } from 'react-router-dom'


function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IFFIONEX</span>
            </a>
            

            <div className="text-2xl md:hidden">
                <div className="relative inline-block">
                    <button id="dropdownButton"
                        className="focus:outline-none bg-slate-600 hover:bg-slate-700 text-white rounded-full p-2 transition duration-300">
                        &#x2630;
                    </button>
                    <div id="dropdownMenu"
                        className="hidden absolute right-0 mt-2 w-40 bg-white border-2 border-gray-700 rounded-lg shadow-md z-10 transition duration-300">
                        <NavLink
                        to='/'
                            className="block py-3 px-6 text-lg text-gray-800 border-b border-gray-200 transition duration-300">
                            Home
                        </NavLink>

                        <NavLink 
                        to='/about'
                        className="block py-3 px-6 text-lg text-gray-800 transition duration-300">
                            About
                        </NavLink>
                    </div>
                </div>
            </div>



            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
                    <li>
                        <NavLink
                        to='/'
                            className=
                            "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Home
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/contact'
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink
                        to='/login'
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Login
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink
                        to='/register'
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Register
                        </NavLink>    
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header