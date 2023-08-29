import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const ContactMe = () => {
    return (
        <div id="contact" className="min-h-screen bg-blue-100 flex items-center justify-center" style={{ backgroundImage: `url('background.png')` }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-2/3 mt-4 mb-4 text-blue-950">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>

                <div className="text-lg">
                    <h3 className="font-bold mb-2">Get In Touch</h3>
                    <p>If you have any questions, feel free to reach out.</p>



                    <h3 className="font-bold mb-2 mt-4">Send Me a Message or Contact Me via Social Media</h3>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="4"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Send
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center space-x-8 mb-4">
                        <a href="https://github.com/jdwd40" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github text-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/john-driscoll-188462108/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin text-2xl"></i>
                        </a>
                        <a href="https://twitter.com/johnwdriscoll1" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
