import React, { useState } from 'react';
import '../App.css';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('Sending email with message:', message);
    setMessage('');
  };

  return (
    <div className='centering'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows={5}
          cols={50}
          placeholder="Type your message here..."
          required
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;

