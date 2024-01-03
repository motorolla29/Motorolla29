import MobileDetect from 'mobile-detect';

import WaveCanvas from '../../../canvas/Wave-canvas';
import TextParticlesCanvas from '../../../canvas/Text-particles-canvas';

import './home.css';

const Home = () => {
  const md = new MobileDetect(window.navigator.userAgent);

  return (
    <>
      {!md.mobile() && <WaveCanvas />}
      <TextParticlesCanvas text="M29" />
    </>
  );
};

export default Home;
