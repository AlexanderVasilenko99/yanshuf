import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import FirstSection from './Components/1-FirstSection/FirstSection';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RightsSection from './Components/RightsSection/RightsSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Alexander Vasilenko";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <FirstSection />
      <RightsSection />
    </BrowserRouter >
  </React.StrictMode>
);
