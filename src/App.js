import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CourseWrap from './components/CourseWrapper/CourseWrap';



function App() {
  
  return (
    
      <div className="main-container container">
        <Header></Header>
        <CourseWrap></CourseWrap>
      </div>
    
  );
}

export default App;
