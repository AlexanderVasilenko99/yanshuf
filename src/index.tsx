import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.scss';
import Footer from './Components/Footer/Footer';
import Marquee from './Components/Marquee/Marquee';
import Navbar2 from './Components/Navbar2/Navbar2';
import Router from './Components/Router';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Yanshuf Books";

root.render(
  <BrowserRouter basename='/yanshuf'>
    <ScrollToTop />
    <Marquee />
    <Navbar2 />
    <main>
      <Router />
      <Footer />
    </main>
  </BrowserRouter >
);
