import WaveCanvas from '../../../canvas/Wave-canvas';
import TextParticlesCanvas from '../../../canvas/Text-particles-canvas';
import './home.css';

const Home = () => {
  return (
    <>
      <WaveCanvas />
      <TextParticlesCanvas text="M29" />
    </>
  );
};

export default Home;
