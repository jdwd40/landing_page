import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className="bg-blue-500 py-8 text-white">
      <div className="container mx-auto text-center ">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
        
        <div className="flex justify-center space-x-8 mb-4 text-white">
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

        <p className="text-lg text-gray-700 mb-4 text-white">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div className="text-sm text-gray-600">
          <p className='text-white'>&copy; 2023 John Driscoll. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
