import React from 'react';

const AboutMe = () => {
    return (
        <div id="about" className="min-h-screen bg-blue-100 flex items-center justify-center" style={{ backgroundImage: `url('background.png')` }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-2/3 mt-5 mb-5">
                <div className="flex justify-between items-center">
                    <img src='profile_pic.jpg' alt="John Driscoll" className="w-24 h-24 rounded-full mr-4" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-blue-950">About Me</h2>

                <div className="text-lg text-blue-950">
                    <h3 className="font-bold mb-2">Who I Am</h3>
                    <p>Hello, I'm John Driscoll, and my journey into the world of web development is far from conventional.</p>

                    <h3 className="font-bold mb-2 mt-4">My Beginnings</h3>
                    <p>It all began in a bustling warehouse, where I was just another guy sorting packages and managing inventory. But my curiosity for technology didn't let me stay there for long. I climbed the ladder and found myself in a tech support role, troubleshooting issues and providing solutions in a fast-paced environment.</p>

                    <h3 className="font-bold mb-2 mt-4">My Curveball</h3>
                    <p>Life, as it often does, threw me a curveball. I transitioned into a completely different role as a fruit and vegetable delivery driver. While the job was different, my passion for technology never waned. I kept my dreams alive, tinkering with code during my free time and learning the basics of web development.</p>


                    <h3 className="font-bold mb-2 mt-4">My Turning  Point</h3>
                    <p>Then came the pandemic. I contracted COVID-19 and had to take a break from work. It was a challenging period, but I turned adversity into opportunity. Confined to my home, I delved deeper into web development, learning languages like HTML, CSS, and JavaScript, and frameworks like React.js and Node.js.</p>

                    <h3 className="font-bold mb-2 mt-4">Family First</h3>
                    <p>In the midst of this, my mother fell ill. Family has always been my cornerstone, so I took on the role of a caregiver. It was a juggling act—balancing family responsibilities with my burgeoning interest in coding. But I persevered, and the experience enriched me both personally and professionally.</p>

                    <h3 className="font-bold mb-2 mt-4">Where I Am Now</h3>
                    <p>Today, I stand at an exciting crossroads. Armed with a diverse skill set and real-world experience, I am actively seeking opportunities to bring my web development expertise to the forefront. Whether it's a full-time role, part-time work, or freelance projects, I'm open to all avenues where I can contribute and continue to grow.</p>

                    <h3 className="font-bold mb-2 mt-4">My Story</h3>
                    <p>So, that's my story. It's been a rollercoaster of a journey, but every twist and turn has shaped me into who I am today. And I'm excited to see where the road ahead takes me</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
