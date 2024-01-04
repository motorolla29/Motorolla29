import ParticlePhotoCanvas from '../../../canvas/Particle-photo-canvas';
import Promo from '../../promo/Promo';
import SimplePromoPhoto from '../../simple-promo-photo/SimplePromoPhoto';

import './about.css';

const About = () => {
  const browser = window.navigator.userAgent;

  return (
    <>
      {!browser.includes('Firefox') ? (
        <ParticlePhotoCanvas />
      ) : (
        <SimplePromoPhoto />
      )}
      <Promo />
    </>
  );
};

export default About;
