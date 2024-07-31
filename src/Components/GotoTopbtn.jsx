// GoToTopButton.js
import React, { useState, useEffect } from 'react';
const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button} className='btn btn-outline-darkgrey me-4'>
      <i class="fa-solid fa-arrow-turn-up"></i>
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1000,
  },
};

export default GoToTopButton;
