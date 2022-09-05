import React, { useEffect, useState } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

function App() {
  const { t } = useTranslation();
  const [showGoToTopButton, setShowGoToTopButton] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
              setShowGoToTopButton(true);
          } else {
              setShowGoToTopButton(false);
          }
      });
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
  }
  return (
    <div id="app">
      <Header />
      {showGoToTopButton && <button onClick={scrollToTop} className="go-to-top" title={t('app.goToTop')}><span className="arrow up" /></button>}
      <Section />
      <Footer />
    </div>
  );
}

export default App;