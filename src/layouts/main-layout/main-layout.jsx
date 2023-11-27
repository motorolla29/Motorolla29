import { Outlet } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import StarsCanvas from '../../canvas/Stars-canvas';

import './main-layout.css';

const MainLayout = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <StarsCanvas />
    </>
  );
};

export default MainLayout;
