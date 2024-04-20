import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import api from '../../Utils/api';
import { useNavigate } from 'react-router-dom';


function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call the logout API
        fetch('http://127.0.0.1:8000/user/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include any other necessary headers, such as authentication tokens
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Logout failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Remove the JWT token from local storage
            localStorage.clear(); // Assuming 'jwtToken' is the key used to store the JWT token
            setIsLoggedIn(false);
            navigate('/login'); // Use replace option to prevent going back to the previous page
        })
        .catch((error) => {
            console.error('Error:', error);
            // Optionally, show an error message to the user
        });
    };
    

 
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-600 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IFFIONEX</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                        </li>
                                <li>
                                    <button onClick={handleLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
                                </li>
                                <li>
                                    <NavLink to='/login' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/register' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
                                </li>
                
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Header;
