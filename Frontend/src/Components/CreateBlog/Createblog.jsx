import React, { useState } from 'react';
import api from '../../Utils/api';

const CreateBlog = () => {
 const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
 });

 const [successMessage, setSuccessMessage] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
   
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    if (formData.image) {
       data.append('image', formData.image);
    }
   
    try {
       const response = await api('http://127.0.0.1:8000/blog/create/', {
         method: 'POST',
         body: data,
       });
   
       if (!response.ok) {
         throw new Error(`HTTP error: The status is ${response.status}`);
       }
   
       const responseData = await response.json();
       console.log(responseData);
       setSuccessMessage('Blog created successfully!');
       setErrorMessage(''); // Clear any previous error message
    } catch (error) {
       console.error('There was a problem with your fetch operation:', error);
       setErrorMessage(`There was a problem with your fetch operation: ${error.message}`);
    }
   };
   

 return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Blog</h2>
            
            {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" className="mt-1 block w-full rounded-md border-2 p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50" placeholder="Enter blog title" value={formData.title} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                <textarea name="content" id="content" className="mt-1 block w-full border-2 p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50" rows="5" placeholder="Enter blog content" value={formData.content} onChange={handleChange}></textarea>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input type="file" name="image" id="image" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 border-2" onChange={handleChange} />
              </div>
              <div>
                <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 ease-in-out">Create Blog</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
 );
};

export default CreateBlog;
