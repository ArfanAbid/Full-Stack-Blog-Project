import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Utils/api';

export default function InfoPage() {
    const { uid } = useParams();
    const [blogData, setBlogData] = useState({});

    useEffect(() => {
        api(`http://127.0.0.1:8000/blog/detail/${uid}`)
          .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data.data);
                setBlogData(data.data);
            })
          .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [uid]);

    return (
        <>
            <div className="w-full">
                <div className="flex bg-white h-screen">
                    <div className="flex items-center text-center bg-gray-100 lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div className="bg-gray-100 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    Title: {blogData.title}
                                </h1>
                                <h2 className="text-xl text-blue-700 mb-6 font-semibold">
                                Owner Name: {blogData.ownerName}
                                </h2>
                             
                                <h2 className="text-xl text-gray-700 mb-6 font-semibold">
                                Content : 
                                </h2> 
                                <p className="text-lg text-gray-700 mb-6">
                                    {blogData.content}
                                </p>
                                
                                <p className="text-lg text-gray-700">
                                  Thank you for visiting IFFIONEX. We hope you enjoy your time
                                  here and find our content informative and inspiring.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 bg-gray-100">
                        <div
                            className="w-[80%] h-[80%]  bg-cover bg-center rounded-2xl mt-10"
                            style={{ backgroundImage: `url(http://127.0.0.1:8000/${blogData.image})` }}
                        >
                            <div className="h-full bg-gray-500 rounded-2xl opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-200" />
        </>
    );
}
