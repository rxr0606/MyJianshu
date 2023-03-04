import React from 'react';
//等价于import {component} from 'react
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//如果断网了，依然可以看见之前访问的页面
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
