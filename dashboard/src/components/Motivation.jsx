import React, { useEffect, useState } from 'react';
import './Motivation.css'; //styling

function Motivation() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote('Could not fetch quote. Try again later.');
        setAuthor('');
      });
  }, []);

  return (
    <div className="motivation">
      <h2>🌟 Motivation</h2>
      <blockquote>
        "{quote}"
        <footer>— {author}</footer>
      </blockquote>
    </div>
  );
}

export default Motivation;
