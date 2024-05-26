import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle success here, e.g., show a message
            alert('Form submitted successfully!');
            setFormData({ username: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <section className="bg-gray-600">
            <h1 className='font-bold text-white flex justify-center text-3xl p-2'>Contact Us </h1>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=33.5651,73.0169&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        style={{
                            filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                        }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                <p className="text-sm font-bold">ADDRESS</p>
                            </h2>
                            <p className="mt-1">
                                Bahria Town phase 8, River View Height Rawalpindi 
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                <p className="text-sm font-bold">EMAIL</p>
                            </h2>
                            <a className="text-blue-500 leading-relaxed">iffionex111@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                <p className="text-sm font-bold">PHONE</p>
                            </h2>
                            <p className="leading-relaxed">033458392611</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-xl p-4  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
