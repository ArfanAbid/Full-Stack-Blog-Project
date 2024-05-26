import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../Utils/api';
import { toast } from 'react-toastify';


export default function DetailBlog() {
    const { uid } = useParams();
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate=useNavigate()

    // For Displaying Details
    useEffect(() => {
        api(`http://127.0.0.1:8000/blog/detail/${uid}`)
            .then((response) => {
                return response.json();

            }).then((data)=>{
                setBlogData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleUpdateBlog = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        // Assuming you have a file input with the name 'image'
        const file = formData.get('image');
    
        try {
            const response = await api(`http://127.0.0.1:8000/blog/update/${uid}`, {
                method: 'PUT',
                body: formData, // Directly send FormData
            });
                console.log(response.status);
            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }
    
            const data = await response.json();
            setBlogData(data);
            toast.info('Blog Updated Successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            navigate('/myblog')
        } catch (err) {
            console.error('There was an error!', err);
            setError(err.message);
        }
    };
    
    const handleDeleteBlog = async (event) => {
        event.preventDefault();

        try {
            const response = await api(`http://127.0.0.1:8000/blog/delete/${uid}`, {
                method: 'DELETE',
            });
                
            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }

            toast.info('Blog Deleted Successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            navigate('/myblog')
        } catch (err) {
            console.error('There was an error!', err);
            setError(err.message);
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto my-8 px-4">
            <div className="flex flex-wrap ">
                <div className="w-auto md:w-1/2 p-2">
                    <img src={`http://127.0.0.1:8000/${blogData.image}`} alt={blogData.title} className="relative w-[70%] h-[70%] bg-cover bg-center rounded-lg overflow-hidden "/>
                </div>

            <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-xl p-4 md:ml-10 w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">{blogData.title}</h2>
            <p className="leading-relaxed mb-5 text-gray-600">By: {blogData.ownerName}</p>
            <form onSubmit={handleUpdateBlog} className="space-y-4">
                <div className="relative mb-4">
                    <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={blogData.title}
                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={blogData.content}
                        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
                <div>
                    {/* <input type="file" defaultValue={blogData.image} /> */}
                </div>
                <div className="flex justify-centre ">
                    <button type="submit" className="text-white bg-blue-500 border-0 py-2 mr-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                        Update Blog
                    </button>

                    <button onClick={handleDeleteBlog} type="submit" className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                        Delete Blog
                    </button>
                    
                </div>
            </form>
            <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                
            </p>
        </div>



        </div>
        </div>
    );
    
}
