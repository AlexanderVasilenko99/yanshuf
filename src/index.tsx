import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.scss';
import Footer from './Components/Footer/Footer';
import Marquee from './Components/Marquee/Marquee';
import Navbar2 from './Components/Navbar2/Navbar';
import Router from './Components/Router';
import ScrollToTop from './Components/ScrollToTop';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import translationEN from './Languages/EN/translation.json';
import translationHE from './Languages/HE/hebrew.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Yanshuf Books";

i18n
  .use(initReactI18next)
  .init({
    resources: { he: { translation: translationHE } },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

root.render(
  < BrowserRouter >
    {/* basename='/yanshuf' */}
    <ScrollToTop />
    {/* <Marquee /> */}
    < Navbar2 />
    <main>
      <Router />
      <Footer />
    </main>
  </BrowserRouter >
);
