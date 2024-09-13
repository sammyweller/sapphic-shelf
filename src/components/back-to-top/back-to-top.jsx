import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

import './back-to-top.css'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp /> 
      </div>
    )
  );
};

export default BackToTop;