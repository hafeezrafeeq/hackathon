import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screen/Landing';
import Login from './screen/Login';
import SignUp from './screen/SignUp';

import './App.css';

// Import Locomotive Scroll
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll after component mounts
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div data-scroll-container>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;