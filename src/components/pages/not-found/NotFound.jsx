import TextParticlesCanvas from '../../../canvas/Text-particles-canvas';

import './not-found.css';

const NotFound = () => {
  return (
    <TextParticlesCanvas
      text="Not Found"
      fontSizeMultiplier={0.4}
      gap={5}
      particleSize={0.5}
    />
  );
};

export default NotFound;
