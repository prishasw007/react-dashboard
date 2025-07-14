import React, {useEffect, useState} from 'react';
import ToDoList from './components/ToDoList';
import './App.css';
import CommentBox from './components/CommentBox';
import Motivation from './components/Motivation';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <ToDoList/>
      <CommentBox/>
      <Motivation/>
      <Timer/>
    </div>
  );
}

export default App;