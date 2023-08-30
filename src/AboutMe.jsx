import React, { useState } from 'react';

const AboutMe = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage(2);
    };

    const prevPage = () => {
        setCurrentPage(1);
    };

    return (
        <div id="about" className="min-h-screen bg-blue-100 flex flex-col items-center justify-center" style={{ backgroundImage: `url('background.png')` }}>
            {currentPage === 1 && (
                
                     <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 mt-5 mb-5 relative">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 mt-5 mb-5 relative">
                    <img src='profile_pic.jpg' alt="John Driscoll" className="w-24 h-24 rounded-full absolute top-0 right-0" />
                    <h2 className="text-3xl font-semibold mb-4 text-blue-950">About Me</h2>
                    </div>
                    <div className="text-lg text-blue-950">
                        <h3 className="font-bold mb-2">Who I Am</h3>
                        <p>Hello, I'm John Driscoll. My path into the world of web development has been anything but traditional it was far removed from the coding world you might expect.</p>

                        <h3 className="font-bold mb-2 mt-4">My Beginnings</h3>
                        <p> I first cut my teeth in the dynamic environment of a bustling warehouse, where the order picking and inventory management became my day-to-day. There, I honed skills that aren't taught in coding bootcamps—teamwork, adaptability, and the art of thriving in a high-pressure setting</p>

                        <h3 className="font-bold mb-2 mt-4">My Promotion</h3>
                        <p>But as fate would have it, my knack for technology didn't go unnoticed. I soon found myself transitioning into a tech support role, where I was no longer dealing with physical packages but rather with a different kind of problem-solving. This was my first real taste of the tech world.</p>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextPage}>Next</button>
                </div>
            )}

            {currentPage === 2 && (
                <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 mt-5 mb-5">
                    
                    <div className="text-lg text-blue-950">
                        <h3 className="font-bold mb-2 mt-4">The Detour</h3>
                        <p>After being made redundant from my tech support role, I took a job as a fruit and vegetable delivery driver. While it was a change of pace, it taught me valuable skills in time management and problem-solving. This period was a detour in my career, but a useful one. Throughout, I stayed committed to coding, continuing to build my skills in my spare time.</p>

                        <h3 className="font-bold mb-2 mt-4">Family First</h3>
                        <p>During this time, I contracted COVID-19, and my mother also fell seriously ill. Family being a cornerstone in my life, I naturally stepped into the role of caregiver. Despite the challenges, I didn't put my web development studies on hold. Instead, I used this period as an opportunity to further deepen my skills in the field.</p>

                        <h3 className="font-bold mb-2 mt-4">Where I Am Now</h3>
                        <p>Today, fully fit and raring to go, I stand at an exciting crossroads. With a diverse skill set in hand, I'm eager to actively pursue roles that will allow me to fully utilize my expertise in web development.</p>

                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={prevPage}>Previous</button>
                </div>
            )}
        </div>
    );
};

export default AboutMe;
