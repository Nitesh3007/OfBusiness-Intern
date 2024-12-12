import React, { useState } from 'react';
import axios from 'axios';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = () => {
    if (!url) return alert('Enter a valid URL');
    axios.post('http://localhost:5000/shorten', { longUrl: url })
      .then((res) => setShortUrl(res.data.shortUrl))
      .catch(() => alert('Error shortening URL'));
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Long URL" />
      <button onClick={shortenUrl}>Shorten</button>
      {shortUrl && <a href={shortUrl}>{shortUrl}</a>}
    </div>
  );
}

export default UrlShortener;
