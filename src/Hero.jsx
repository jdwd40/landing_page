import React from 'react';


const Hero = () => {
    return (
        <div id="home" className="relative flex items-center justify-center h-screen">
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-full h-full object-cover"
            >
                <source src="/my_journey4.mp4" type="video/mp4" />
            </video>
            <div className="absolute z-20 text-center w-full font-title">
                <h1 className="text-5xl font-bold text-white">John Driscoll</h1>
                <p className="text-xl text-white">Junior Web Developer</p>
                <div className="mt-4 bg-black bg-opacity-50 rounded p-4 w-1/2 mx-auto font-body">
                    <p className="text-white text-sm">
                    From warehouse to tech support, delivery driver to coder—life's been a wild ride. COVID hit, I hit the books. Balanced family and code, and now I'm all in for web dev opportunities. Full/Part Time or Freelance - Let's code something amazing!
                    </p>
                </div>
                <a href='https://johnwdriscoll.co.uk'><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View My Work
                </button></a>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 z-15"></div>
        </div>
    );
};

export default Hero;
