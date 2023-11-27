import { Outlet } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './main-layout.css';

const MainLayout = () => {
  return (
    <div className="content_wrapper">
      <div className="content">
        <Header />
        <Outlet />
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
