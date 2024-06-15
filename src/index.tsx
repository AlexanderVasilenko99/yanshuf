import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.scss';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Router from './Components/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Yanshuf Books";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter >
  </React.StrictMode>
);
