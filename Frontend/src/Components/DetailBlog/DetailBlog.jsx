import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Utils/api';

export default function DetailBlog() {
    const { uid } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await api(`http://127.0.0.1:8000/blog/detail/${uid}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setBlogData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [uid]);

    const handleUpdateBlog = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const updatedData = Object.fromEntries(formData);

        try {
            const response = await api(`http://127.0.0.1:8000/blog/update/${uid}/`, {
                method: 'PUT', // Use PUT method for updating
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }

            const data = await response.json();
            setBlogData(data); // Update the state with the updated blog data
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <section className="container mx-auto my-8 flex flex-wrap items-center ml-8">
                <div className="w-full md:w-1/2 mb-4 md:mb-3 md:col-span-4">
                    <img src={blogData.image_url} alt="Product Image" className="rounded-xl mx-auto md:mx-0"/>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                        <div className="w-full md:w-2/4 md:mr-4">
                            <h2 className="text-3xl font-semibold mb-4">{blogData.title}</h2>
                            <div className="mb-2">
                                <b>Category:</b>
                                <br/>
                                <p className="text-lg text-gray-800">{blogData.category}</p>
                            </div>
                            <div className="mb-2">
                                <b>Owner/CreatedBy: </b><br/>
                                <p className="text-lg text-gray-800">{blogData.created_by}</p>
                            </div>
                            <div className="mb-2">
                                <b>Price: </b><br/>
                                <p className="text-lg text-gray-800">${blogData.price}</p>
                            </div>
                            <div className="mb-4">
                                <b>Description: </b><br/>
                                <p className="text-gray-600">{blogData.description}</p>
                            </div>

                            <form onSubmit={handleUpdateBlog}>
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" name="title" defaultValue={blogData.title} />

                                <label htmlFor="description">Description:</label>
                                <textarea id="description" name="description" defaultValue={blogData.description}></textarea>

                                <button type="submit">Update Blog</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
