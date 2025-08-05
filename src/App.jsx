import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/Multiplepages/Project.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/Multiplepages/Home.jsx';
import About from './components/Multiplepages/About.jsx';
import ContactForm from './components/Multiplepages/ContactForm.jsx';
import Header from './components/header/Header.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'}  style={{height:'100vh'}}>
      <Router>
        
          <Header />
          
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContactForm" element={<ContactForm />} />
            </Routes>
            </Router>
         
           
            <div className="footerContent">
          <Footer />
        </div>
     
    </div>
  );
}

export default App;
