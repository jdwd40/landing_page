// Skills.jsx
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Skills = () => {
    return (
        <div id="skills" className="bg-gradient-to-r from-blue-600 to-blue-400 p-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">My Tech Stack</h2>
            <ul className="flex flex-wrap justify-center">
                <li className="m-4 text-2xl flex items-center text-white">
                    <i className="fa fa-code mr-2"></i>
                    <span>HTML</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">
                    <i className="fa fa-css3 mr-2"></i>
                    <span>CSS</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">

                        <img src="js.svg" alt="JavaScript" className="w-8 h-8 mr-2 text-white" />
                   
                    <span>JavaScript</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">

                <img src="node-js.svg" alt="node" className="w-8 h-8 mr-2 text-white" />
                   
                   <span>Node.js</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">
                <img src="react.svg" alt="react" className="w-8 h-8 mr-2 text-white" />
                   
                   <span>React.js</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">
                    <i className="fa fa-database mr-2"></i>
                    <span>Postgres</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">
                <img src="server-solid.svg" alt="react" className="w-8 h-8 mr-2 text-white" />
                   
                   <span>SQL</span>
                </li>
                <li className="m-4 text-2xl flex items-center text-white">
                    <i className="fa fa-cogs mr-2"></i>
                    <span>MVC Software Design</span>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
