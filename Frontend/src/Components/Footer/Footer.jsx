import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-600">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IFFIONEX</span>
            </a>
            <ul
                className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-300">
                <li>
                <NavLink 
                to='about/'
                    className="hover:underline me-4 md:me-6">
                    About
                </NavLink>    
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <NavLink
                    to='contact/'
                    className="hover:underline">
                        Contact
                    </NavLink>    
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-200  sm:text-center dark:text-gray-200 ">© 2024 <a
                href="https://flowbite.com/" className="hover:underline">IFFIONEX™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer