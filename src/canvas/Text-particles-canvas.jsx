import { useEffect } from 'react';
import { useRef } from 'react';

import debounce from '../utils/debounce';
class Particle {
  constructor(effect, x, y, size) {
    this.effect = effect;
    this.x = Math.random() * this.effect.width;
    this.y = this.effect.height;
    this.originX = x;
    this.originY = y;
    this.size = size;
    this.color = 'rgb(110, 110, 110)';
    this.dx = 0;
    this.dy = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
    this.friction = 0.8;
    this.ease = Math.random() * 0.02 + 0.05;
  }
  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = (this.dx * this.dx + this.dy * this.dy) * 3;
    this.force = -this.effect.mouse.radius / this.distance;
    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    }
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }
}

class Effect {
  constructor(context, width, height, text, fontSizeMultiplier, gap) {
    this.ctx = context;
    this.text = text;
    this.width = width;
    this.height = height;
    this.maxTextWidth = this.width * 0.8;
    this.fontSize = (this.width / 2.5) * fontSizeMultiplier;
    this.textX = this.width / 2;
    this.textY =
      this.height < 750 || this.width > 1200
        ? this.fontSize / 2 + 150
        : this.height / 1.7;

    this.particles = [];
    this.gap = gap;
    this.mouse = {
      radius: 2000,
      x: 0,
      y: 0,
    };
  }

  wrapText(particleSize, rarity) {
    this.ctx.font = this.fontSize + 'px Black Ops One';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(this.text, this.textX, this.textY);
    const pixels = this.ctx.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const alpha = pixels[index];
        if (alpha > 0 && (this.fontSize < 250 || Math.random() < rarity)) {
          this.particles.push(new Particle(this, x, y, particleSize));
        }
      }
    }
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  update() {
    this.particles.forEach((p) => p.update());
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.particles.forEach((p) => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
    });
  }
}

const TextParticlesCanvas = ({
  text,
  fontSizeMultiplier = 1,
  gap = 10,
  particleSize = 1.5,
  rarity = 0.55,
}) => {
  const ref = useRef();

  useEffect(() => {
    let animationID;

    const canvas = ref.current;
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true,
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let effect = new Effect(
      ctx,
      canvas.width,
      canvas.height,
      text,
      fontSizeMultiplier,
      gap
    );

    document.fonts.ready.then(() => {
      effect.wrapText(particleSize, rarity);
    });

    function animate() {
      effect.update();
      effect.render();
      animationID = requestAnimationFrame(animate);
    }

    animate();

    const onMousemoveHandler = (e) => {
      effect.mouse.x = e.x;
      effect.mouse.y = e.y;
    };
    const onTouchstartHandler = (e) => {
      effect.mouse.x = e.changedTouches[0].clientX;
      effect.mouse.y = e.changedTouches[0].clientY;
    };
    const onTouchmoveHandler = (e) => {
      effect.mouse.x = e.targetTouches[0].clientX;
      effect.mouse.y = e.targetTouches[0].clientY;
    };
    const onTouchendHandler = (e) => {
      effect.mouse.x = 0;
      effect.mouse.y = 0;
    };

    const onResizeDebouncedHandler = debounce(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect = new Effect(
        ctx,
        canvas.width,
        canvas.height,
        text,
        fontSizeMultiplier,
        gap
      );
      effect.wrapText(particleSize, rarity);
    }, 250);

    window.addEventListener('mousemove', onMousemoveHandler, false);
    window.addEventListener('touchstart', onTouchstartHandler, false);
    window.addEventListener('touchmove', onTouchmoveHandler, false);
    window.addEventListener('touchend', onTouchendHandler, false);
    window.addEventListener('resize', onResizeDebouncedHandler, false);

    return () => {
      cancelAnimationFrame(animationID);
      window.removeEventListener('touchstart', onTouchstartHandler, false);
      window.removeEventListener('touchmove', onTouchmoveHandler, false);
      window.removeEventListener('touchend', onTouchendHandler, false);
      window.removeEventListener('mousemove', onMousemoveHandler, false);
      window.removeEventListener('resize', onResizeDebouncedHandler, false);
    };
  });

  return <canvas ref={ref}></canvas>;
};

export default TextParticlesCanvas;
