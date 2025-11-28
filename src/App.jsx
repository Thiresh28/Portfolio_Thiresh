import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">TS</div>
        
        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </button>
        
        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hello, It's Me</p>
            <h1 className="name">Thiresh S</h1>
            <h2 className="title">
              And I'm a <span className="highlight">Robotics & Automation Innovator</span>
            </h2>
            <h3 className="subtitle">Creative Tech Designer | Future-Ready Maker</h3>
            <p className="description">
              Innovative technologist with a passion for robotics, AI, and automation. 
              Pursuing B.E. in Robotics & Automation at MIT Campus, Anna University. 
              Driven to develop groundbreaking solutions in industrial automation and intelligent systems.
            </p>
            
            <div className="social-links">
              <a href="https://github.com/Thiresh28" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thireshs" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:thiresh980@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </div>
            
            <a href="/CV_THIRESH.pdf" download className="download-btn">
              Download CV
            </a>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="hexagon-glow"></div>
              <img src="/thiresh-photo.png" alt="Thiresh S" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>
        <div className="section-underline"></div>

        <div className="about-content">
          <div className="about-text">
            <h3>Robotics & Automation Student</h3>
            <p>
              I'm a passionate Robotics and Automation student pursuing B.E. at MIT Campus, Anna University. 
              My journey blends engineering excellence with creative problem-solving.
            </p>
            <p>
              I believe in the fusion of engineering, creativity, and design to build innovative solutions. 
              From simulation and modelling to hands-on automation projects, I'm driven by turning futuristic ideas into reality.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">🎓</div>
                <h4>Education</h4>
                <p>B.E. Robotics & Automation</p>
                <p>MIT Campus, Anna University</p>
                <p className="highlight">CGPA: 7.62</p>
              </div>

              <div className="about-card">
                <div className="card-icon">🤖</div>
                <h4>Specialization</h4>
                <p>Robotics, AI, Automation</p>
                <p>& Intelligent Systems</p>
              </div>

              <div className="about-card">
                <div className="card-icon">🎯</div>
                <h4>Skills</h4>
                <p>Simulation, Modelling</p>
                <p>Automation & Design</p>
              </div>

              <div className="about-card">
                <div className="card-icon">💡</div>
                <h4>Values</h4>
                <p>Innovation, Problem-Solving</p>
                <p>& Futuristic Thinking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
        <h2 className="section-title">Skills & <span className="highlight">Expertise</span></h2>
        <div className="section-underline"></div>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-icon">🎨</div>
            <h3>Design & Simulation</h3>
            <div className="skill-bars">
              {[
                { name: 'AutoCAD', level: 85 },
                { name: 'Fusion360', level: 80 },
                { name: 'SolidWorks', level: 75 },
                { name: 'Proteus', level: 70 },
                { name: 'MATLAB Simulink', level: 85 }
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-icon">💻</div>
            <h3>Programming</h3>
            <div className="skill-bars">
              {[
                { name: 'Python', level: 90 },
                { name: 'C/C++', level: 85 },
                { name: 'Embedded C', level: 80 },
                { name: 'MATLAB', level: 85 }
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-icon">🤖</div>
            <h3>Robotics</h3>
            <div className="skill-bars">
              {[
                { name: 'ROS2', level: 85 },
                { name: 'Gazebo', level: 80 },
                { name: 'Sensor Integration', level: 85 },
                { name: 'Kinematics', level: 80 }
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-icon">🎬</div>
            <h3>Media & Creativity</h3>
            <div className="skill-bars">
              {[
                { name: 'After Effects', level: 75 },
                { name: 'DaVinci Resolve', level: 70 },
                { name: 'Canva', level: 85 }
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects" id="projects">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Explore my journey through robotics, automation, and innovative engineering solutions</p>

        <div className="projects-grid">
          {[
            {
              title: 'ROS 2 Ackermann Rover',
              desc: 'Simulated Ackermann-steered mobile robot in ROS 2 & Gazebo with differential-to-Ackermann kinematics and navigation testing.',
              tags: ['ROS2', 'Gazebo', 'Python', 'Kinematics', 'Navigation'],
              github: 'https://github.com/Thiresh28',
              gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)'
            },
            {
              title: 'TRRR Manipulator – MATLAB',
              desc: '4-link TRRR robotic arm simulation with FK/IK, coordinated motor control, and gripper simulation in MATLAB Simulink.',
              tags: ['MATLAB', 'Simulink', 'Kinematics', 'Robotics', 'Control'],
              github: 'https://github.com/Thiresh28',
              gradient: 'linear-gradient(135deg, #9d00ff, #ff00ff)'
            },
            {
              title: 'Rover with Hydraulic Manipulator',
              desc: 'Mobile rover with hydraulic rotary-to-linear manipulator and microcontroller coordination for material handling.',
              tags: ['Microcontrollers', 'Hydraulics', 'Embedded C', 'Hardware'],
              github: 'https://github.com/Thiresh28',
              gradient: 'linear-gradient(135deg, #00ff88, #00cc66)'
            },
            {
              title: 'AutoPark X',
              desc: 'Intelligent parking system using sensors and automation to regulate vehicle entry/exit with smart access control.',
              tags: ['Sensors', 'Automation', 'IoT', 'Microcontrollers'],
              github: 'https://github.com/Thiresh28',
              gradient: 'linear-gradient(135deg, #ff6b00, #ff9500)'
            },
            {
              title: 'AquaSense',
              desc: 'Smart water control system using laser + LDR technology to automatically stop overflow for efficient water management.',
              tags: ['Sensors', 'Arduino', 'Smart Systems', 'Automation'],
              github: 'https://github.com/Thiresh28',
              gradient: 'linear-gradient(135deg, #00ddff, #0088ff)'
            },
            {
              title: 'Balancing Bot Design',
              desc: 'Two-wheeled self-balancing robot mechanical design modeled in SolidWorks with control algorithms.',
              tags: ['SolidWorks', 'Mechanical', 'Control', 'Design'],
              github: 'https://github.com/Thiresh28/Balancing-Bot-Design',
              gradient: 'linear-gradient(135deg, #ff00dd, #aa00ff)'
            }
          ].map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header" style={{ background: project.gradient }}>
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience" id="experience">
        <h2 className="section-title"><span className="highlight">Experience</span></h2>
        <div className="section-underline"></div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Intern</h3>
                <span className="company">Bonfiglioli Transmission Pvt Ltd</span>
                <span className="duration">June 2025 - July 2025</span>
                <span className="location">Chennai, India</span>
              </div>
              <ul className="timeline-points">
                <li>Worked extensively with <span className="highlight">industrial gear motor systems</span> and power transmission mechanisms</li>
                <li>Gained hands-on experience in <span className="highlight">PLC diagnostics</span> and industrial automation systems</li>
                <li>Analyzed <span className="highlight">automation workflows</span> in large-scale manufacturing environments</li>
              </ul>
              <div className="timeline-tags">
                <span>PLC Systems</span>
                <span>Gear Motors</span>
                <span>Industrial Automation</span>
                <span>Manufacturing</span>
                <span>Diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievements" id="achievements">
        <h2 className="section-title"><span className="highlight">Achievements</span></h2>
        <div className="section-underline"></div>

        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>eYantra Robotics Competition</h3>
            <p>Designed and simulated a balancing bot</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🎖️</div>
            <h3>National Science Day Exhibition</h3>
            <p>Presented "AutoPark X" - Automated parking gate system</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Interested in collaboration or have a project in mind? Let's connect and build something amazing together!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:thiresh980@gmail.com">thiresh980@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+918610067121">+91 8610067121</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Chinnasalem, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://github.com/Thiresh28" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/thireshs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-visual">
              <div className="contact-circle">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff"/>
                      <stop offset="100%" stopColor="#9d00ff"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="contact-icon-large">💬</div>
              </div>
            </div>
            <h3>Let's Work Together</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <a href="mailto:thiresh980@gmail.com" className="send-message-btn">
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Thiresh S. All rights reserved.</p>
        <p>Built with ❤️ React & Vite</p>
      </footer>
    </div>
  )
}

export default App
