import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './Hero.jsx'
import AboutMe from './AboutMe.jsx'
import 'font-awesome/css/font-awesome.min.css';
import SkillsSection from './SkillsSection.jsx'
import ContactMe from './ContactMe.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <AboutMe/>
    <SkillsSection />
    <ContactMe />
    <Footer />
  </React.StrictMode>,
)
