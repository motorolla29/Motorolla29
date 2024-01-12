import React, { useEffect, useRef } from 'react';

const StarsCanvas = (props) => {
  const ref = useRef();

  const colorArray = ['#fcf8f7', '#a39693', '#f2f0d8', '#5e5e5c', '#21211f'];
  const mouseDistance = 50;
  const radius = 0.5;
  const maxRadius = 1.5;

  let mouse = {
    x: undefined,
    y: undefined,
  };

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';

    let animationID;

    const circleArray = [];

    class Circle {
      constructor(x, y, dx, dy, radius, fill) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = this.radius;

        this.draw = function () {
          context.beginPath();
          context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          context.fillStyle = fill;
          context.fill();
        };

        this.update = function () {
          if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
            this.dx = -this.dx;
          if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
            this.dy = -this.dy;

          this.x += this.dx;
          this.y += this.dy;

          //  INTERACTIVITY
          if (
            mouse.x - this.x < mouseDistance &&
            mouse.x - this.x > -mouseDistance &&
            mouse.y - this.y < mouseDistance &&
            mouse.y - this.y > -mouseDistance
          ) {
            if (this.radius < maxRadius) this.radius += 1;
          } else if (this.radius > this.minRadius) {
            this.radius -= 1;
          }

          this.draw();
        };
      }
    }

    const prepare = () => {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.2) * 0.2;
        const dy = (Math.random() - 0.4) * 0.2;
        const fill = colorArray[Math.floor(Math.random() * colorArray.length)];

        circleArray.push(new Circle(x, y, dx, dy, radius, fill));
      }
    };

    const animate = () => {
      animationID = requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circleArray.length; i++) {
        var circle = circleArray[i];
        circle.update();
      }
    };

    prepare();
    animate();

    const handleMouseMovement = function (e) {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResizeWindow = function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResizeWindow);
    window.addEventListener('mousemove', handleMouseMovement);

    return () => {
      cancelAnimationFrame(animationID);
      window.removeEventListener('resize', handleResizeWindow);
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  });

  return <canvas style={{ position: 'fixed' }} ref={ref} {...props} />;
};

export default StarsCanvas;
