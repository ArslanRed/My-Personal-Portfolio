import React, {useState} from 'react'
import './Welcome.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt,FaWhatsapp  } from 'react-icons/fa'

const Welcome = () => {
 const [hasNewMessage, setHasNewMessage] = useState(true);
 function toggleNotification() {
  const notif = document.getElementById('notification');
  notif.style.display = notif.style.display === 'block' ? 'none' : 'block';
  setHasNewMessage(prev => !prev)
}
    function pad(n) {
  return n.toString().padStart(2, '0');
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  const hrs = pad(now.getHours());
  const mins = pad(now.getMinutes());
  const secs = pad(now.getSeconds());
  const time = `${hrs}:${mins}:${secs}`;
  const clockEl = document.getElementById('clock');

  if (clockEl.textContent !== time) {
    clockEl.textContent = time;
  }

  requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);



  return (
    <aside className="welcome-container">
      <div className="text-Welcome">
        {[...Array(50)].map((_, i) => (
        <div
            key={i}
            className="raindrop"
            style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`,
            animationDelay: `${Math.random() * 2}s`,
            }}
        />
        ))}

        <h1>Hello, <strong>This is Arslan</strong></h1>
        <h3>I'm a Frontend Developer</h3>
        <p>
          I specialize in crafting visually appealing, high-performance web interfaces using React, Tailwind CSS, HTML, JavaScript, and CSS with added interactivity through Three.js and GSAP when needed.
        </p>
        <ul className="social-links">
          <li>
          <a href="https://www.linkedin.com/in/arslan-khan-8a20662b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ArslanRed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:2000arslan03@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="tel:+923441895040" aria-label="Phone">
            <FaPhoneAlt />
          </a>
        </li>
        <li>
          <a href="https://wa.me/923441895040" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a></li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
  <button>Reach Out</button>
</div>
      </div>

    <div className="laptop">
  <div className="screen">
    <div className="code-line line1"></div>
    <div className="code-line line2"></div>
    <div className="code-line line3"></div>
     <div className="mini-text">Hello,<strong> This is Arslan</strong></div>
    <div className="mini-text">I'm a Frontend Developer</div>
    <div className="mini-text">
      I build beautiful and performant UIs with React, Tailwind, Three.js & GSAP.
    </div>
    <div className="mini-icons">
      <FaLinkedin />
      <FaGithub />
      <FaEnvelope />
      <FaPhoneAlt />
    </div> 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
  <button>Reach Out</button>

  </div>
    <div className="code-line line3"></div>
    <div className="code-line line4"></div>
    <div className="code-line line5"></div>
  </div>
  <div className="keyboard">
    <div className="keyboard-buttons">
        <div className='name-fall'>
            <span>A</span>
            <span>R</span>
            <span>S</span>
            <span>L</span>
            <span>A</span>
            <span>N</span>
            <span> </span>
            <span>K</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
        </div>
        <div className="message-bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <div className="message-wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className="btn power" title="Power">&#x23FB;</div>
        <div className="btn vol-up" title="Volume Up">&#x1F50A;</div>
        <div className="btn vol-down" title="Volume Down">&#x1F509;</div>
    </div>
  </div>
</div>


<div className="phone">
  <div className="screenPhone">
    <div className="status-bar"></div>
    <div className="content">
           
      <p id="clock" className="clock-text">00:00:00</p>
      
      <p className="name">My Skills</p>
      <p className="typing-text">|React.js HTML5| </p>
      <p className="typing-text">|JavaScript, CSS| </p>
      <p className="typing-text">|Responsive Web| </p>
      {/* <div class="spinner"></div>
      <div class="wave-loader">
  <span></span>
  <span></span>
  <span></span>
</div> */}
<div className="notification-wrapper">
  <div className='bell-icon-wrapper'>
  <div className="bell-icon" onClick={toggleNotification}>
    🔔</div>
    {hasNewMessage && <span className="bell-indicator"></span>}
    </div>
    <div class="signal-bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
  </div>

  <div className="notification" id="notification">
    <div className="notification-title">New Message</div>
    <div className="notification-body"> <strong style={{color:"pink"}}>"Hello There,</strong> check out my portfolio!"</div>
  
</div>


    </div>
    {/* <div class="content icons-grid">
  <div class="app-icon"></div>
  <div class="app-icon"></div>
</div> */}

  </div>
  <div className="home-button"></div>


</div>
    </aside>
  )
}

export default Welcome
