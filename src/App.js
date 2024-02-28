import React from 'react';
import './App.css';
import cLogo from './Logos/c.svg';
import cssLogo from './Logos/css.svg';
import htmlLogo from './Logos/html.svg';
import javaLogo from './Logos/java.svg';
import jsLogo from './Logos/javascript.svg';
import pythonLogo from './Logos/python.svg';

function App() {
  return (
    <div className="app">
      {/* Dynamic Background */}
      <div className="dynamic-background"></div>

      <header>
        <h1>Yahya Abovat</h1>
        <div className="header-links">
          <a href="http://linkedin.com/in/yabovat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yabovat" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://drive.google.com/file/d/1eS5kh3xEadvVrDAJG4aj_Y4KUhq5N69Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:yabovat@ucf.edu">Email</a>
        </div>
      </header>


      <section  id="about-me">
      <h2>About Me</h2>
      <div className="project"> 
        <p>
          Hi, I'm Yahya Abovat, a computer science student at the University of Central Florida and a passionate web developer with a diverse skill set. I specialize in creating interactive and user-friendly websites, and I'm proficient in a variety of technologies, including:
        </p>
        <div className="tech-logos">
          <img src={cLogo} alt="C Logo" />
          <img src={cssLogo} alt="CSS Logo" />
          <img src={htmlLogo} alt="HTML Logo" />
          <img src={javaLogo} alt="Java Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
          <img src={pythonLogo} alt="Python Logo" />
        </div>
        <p>
          My journey in web development has equipped me with the ability to work across various technologies, ensuring a holistic approach to project development.
        </p>

      </div>



      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="project">
          <p>
            <ul> 
              <p><b>Valencia College</b> | Fall 2020</p>
              <i>Assoicates Of Arts</i>
              <p><b>University of Central Florida</b> | Expected Graduation: Fall 2024</p>
              <i>Bachelor of Science in Computer Science</i>
            </ul>
          </p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        {/* WhatsApp Bot Project */}
        <div className="project">
          <h3>WhatsApp Bot</h3>
          <p>
            <ul>
              <li>Created a WhatsApp bot using Twilio's API within Python's Flask framework.</li>
              <li>The bot receives messages and forwards them back to the user.</li>
              <li>Hosted on a local server using Ngrok/Cloudflare.</li>
            </ul>
          </p>
          <p>Technologies: Twilio API, Python, Flask, Ngrok/Cloudflare</p>
        </div>

        {/* New Tab Browser Extension Project */}
        <div className="project">
          <h3>New Tab Browser Extension</h3>
          <p>
            <ul>
              <li>Developed a productivity-enhancing browser extension using HTML, CSS, and JavaScript.</li>
              <li>The extension displays real-time information, including the current time, date, and live weather updates sourced from OpenWeatherMap's API.</li>
              <li>Integrated a to-do list for seamless task management.</li>
              <li>Showcased new wallpapers on each tab launch via Unsplash API.</li>
            </ul>
          </p>
          <p>Technologies: HTML, CSS, JavaScript, Unsplash API, OpenWeatherMap API</p>
        </div>

        {/* Automated Discord Username Checker Project */}
        <div className="project">
          <h3>Automated Discord Username Checker</h3>
          <p>
            <ul>
              <li>Wrote a Python script using Selenium to autonomously verify Discord username availability.</li>
              <li>Demonstrated proficiency in Python scripting and automation, utilizing Selenium's programmatic interactions to simulate user actions on the Discord platform.</li>
            </ul>
          </p>
          <p>Technologies: Selenium, Python</p>
        </div>

        {/* Cloud Deployment and Management Project */}
        <div className="project">
          <h3>Cloud Deployment and Management</h3>
          <p>
            <ul>
              <li>Deployed serverless web functions in Google Cloud.</li>
              <li>Used Terraform to create storage and configure a Linux Virtual Machine (VM) in Microsoft Azure.</li>
              <li>Installed and configured a DNS server on a Linux VM using Dnsmasq in Microsoft Azure.</li>
            </ul>
          </p>
          <p>Technologies: Google Cloud, Microsoft Azure, Terraform</p>
        </div>

      </section>


      {/* Other sections (Resume, Contact, Footer) remain unchanged */}
    </div>
  );
}

export default App;
