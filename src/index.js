import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {Option1, Option2, Option3 } from './Options';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/option1' element={<Option1/>}/>
        <Route exact path='/option2' element={<Option2/>}/>
        <Route exact path='/option3' element={<Option3/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
