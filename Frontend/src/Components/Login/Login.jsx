import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IFFIONEX from '../../Images/IFFIONEX.jpg';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';



function Login() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 const navigate = useNavigate();
// const [isAuthenticated,setisAuthenticated] = useState(false); 
 const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message || 'There was a problem with your login. Please try again.');
        return;
      }

      const data = await response.json();
      console.log(data);
      const { access, refresh } = data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem("isAuthenticated", true);

      toast.success('Login Successfully ', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      navigate('/myblog'); // Redirect to home page
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      setMessage('There was a problem with your login. Please try again.');
    }
 };
 return (
    <>
      <section className="bg-gray-600">
        <div className="flex flex-col items-center justify-center p-20">
            <a href="#" className="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="h-12 rounded-xl mr-2 border-2 border-y-blue-50" src={IFFIONEX} alt="logo"/>
                <p className=' h-12  text-3xl  '> LOGIN </p>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-900">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" placeholder="******">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                         <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                         {message && <p className="text-sm  text-yellow-400 font-semibold dark:text-yellow-400">{message}</p>}
                         Don't have an account? <NavLink to="/register" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Register here</NavLink>
                         </p>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
 );
}

export default Login;
