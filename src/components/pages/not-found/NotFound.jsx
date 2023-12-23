import TextParticlesCanvas from '../../../canvas/Text-particles-canvas';

import './not-found.css';

const NotFound = () => {
  return (
    <TextParticlesCanvas
      text="Not Found"
      fontSizeMultiplier={0.4}
      gap={5}
      particleSize={0.8}
      rarity={0.3}
    />
  );
};

export default NotFound;
