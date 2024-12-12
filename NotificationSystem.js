import React, { useState } from 'react';
import axios from 'axios';

function NotificationSystem() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const sendNotification = () => {
    if (!email || !message) {
      alert('Please enter email and message');
      return;
    }

    axios
      .post('http://localhost:5000/notify', { email, message })
      .then(() => setStatus('Notification sent successfully'))
      .catch(() => setStatus('Failed to send notification'));
  };

  return (
    <div>
      <h1>Notification System</h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendNotification}>Send Notification</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default NotificationSystem;
