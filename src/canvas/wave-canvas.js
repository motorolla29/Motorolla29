import React, { useEffect, useRef } from 'react';

const WaveCanvas = (props) => {
  const ref = useRef();

  var txt = function (canvas, context) {
    const _t = 'Frontend'.split('').join(String.fromCharCode(0x2001));
    context.font = 'comic sans';
    context.fillStyle = 'rgb(100, 2, 323)';
    context.fillText(
      _t,
      (canvas.width - context.measureText(_t).width) * 0.5,
      canvas.height * 0.5
    );
    return _t;
  };

  const draw = function (canvas, context, t) {
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    context.lineWidth = 0.8;
    context.fillStyle = 'rgb(18, 18, 18)';
    context.fillRect(0, 0, w, h);
    for (let i = -40; i < 400; i += 1) {
      context.strokeStyle = 'rgba(57, 57, 57, 0.318)';
      context.beginPath();
      context.moveTo(0, h / 2);
      for (let j = 0; j < w; j += 10) {
        context.lineTo(
          10 * Math.sin(i / 10) + j + 0.008 * j * j,
          Math.floor(
            h / 2 +
              (j / 2) * Math.sin(j / 50 - t / 50 - i / 118) +
              i * 0.9 * Math.sin(j / 25 - (i + t) / 65)
          )
        );
      }
      context.stroke();
    }
  };

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    let t = 0;
    let animationID;

    const run = function () {
      animationID = window.requestAnimationFrame(run);
      t += 0.2;
      draw(canvas, context, t);
      txt(canvas, context);
    };

    run();

    return () => window.cancelAnimationFrame(animationID);
  }, []);

  return <canvas ref={ref} {...props} />;
};

export default WaveCanvas;
