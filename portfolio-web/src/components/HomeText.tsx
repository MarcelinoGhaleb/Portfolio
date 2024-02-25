import React, { useState, useEffect } from 'react';
import '../App.css';

const HomeText: React.FC = () => {
  const phrases = ['Marcelino Ghaleb', 'Web Developer ', 'Freelancer'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum];
      if (!isDeleting) {
        if (text === currentPhrase) {
          setIsDeleting(true);
          setTimeout(() => {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => (prevLoopNum + 1) % phrases.length);
          }, 5000);
        } else {
          setText((prevText) => {
            return currentPhrase.substring(0, prevText.length + 1);
          });
        }
      } else {
        if (text === '') {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => (prevLoopNum + 1) % phrases.length);
        } else {
          setText((prevText) => {
            return currentPhrase.substring(0, prevText.length - 1);
          });
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, 100)
    return () => clearTimeout(typingTimeout);
  }, [text, loopNum, isDeleting, phrases]);

  return (
    <div>
      <h1 className="HomeText">{text}</h1>
    </div>
  );
};

export default HomeText;
