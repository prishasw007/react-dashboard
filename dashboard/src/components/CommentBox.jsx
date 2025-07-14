import React, { useState } from 'react';
import './CommentBox.css'; // styling

function CommentBox() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    setSubmitted(input);
    setInput(''); // Clear the textarea after submission
  }

  return (
    <div className="comment-box">
      <h2>💬 Leave a Comment</h2>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Write something..."
        rows="4"
        cols="40"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <p>
          <strong>Comment:</strong> "{submitted}"
        </p>
      )}
    </div>
  );
}

export default CommentBox;
