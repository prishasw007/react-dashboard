import React, { useEffect, useState } from 'react';
import './Motivation.css';

function Motivation() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then((res) => res.json())
      .then((data) => {
        // ZenQuotes returns an array with one object
        const quoteObj = data[0];
        setQuote(quoteObj.q);
        setAuthor(quoteObj.a);
      })
      .catch(() => {
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
