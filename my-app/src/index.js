import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import { BrowserRouter, Route } from 'react-router-dom';

// // ...

// const routing = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" component={<Home / >} />
//       <Route path="/:eye/:ear/:background/:wear/:nose/:skin/:hair/:smile" component={<App / >} />
//       <Route path="*" component={<NotFound / >} />
//     </Routes>
//   </BrowserRouter>
// );

// ReactDOM.render(routing, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home / >} />
      <Route path="/:eye" element={<App / >} />
      <Route path="/:eye/:ear" element={<App / >} />
      <Route path="/:eye/:ear/:background" element={<App / >} />
      <Route path="/:eye/:ear/:background/:wear" element={<App / >} />
      <Route path="/:eye/:ear/:background/:wear/:nose" element={<App / >} />
      <Route path="/:eye/:ear/:background/:wear/:nose/:skin" element={<App / >} />
      <Route path="/:eye/:ear/:background/:wear/:nose/:skin/:hair" element={<App / >} />
      <Route path="/:eye/:ear/:background/:wear/:nose/:skin/:hair/:smile" element={<App / >} />
      <Route path="*" element={<NotFound / >} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
