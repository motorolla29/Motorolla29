import { Outlet } from 'react-router-dom';
import MobileDetect from 'mobile-detect';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './main-layout.css';

const MainLayout = () => {
  const md = new MobileDetect(window.navigator.userAgent);

  if (md.tablet() || md.mobile()) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  return (
    <div className="content_wrapper" id="content_wrapper">
      <Header />
      <div className="content">
        <div className="font_preload">font</div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
