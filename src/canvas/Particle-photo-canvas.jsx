import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import image from '../images/Layer1.png';

const ParticlePhotoCanvas = (props) => {
  const ref = useRef();

  const centerVector = new THREE.Vector3(0, 0, 0);

  let animations = [];

  let renderer,
    scene,
    camera,
    particles,
    ww = window.innerWidth,
    wh = window.innerHeight,
    lastMousePos,
    isMouseDown = false;

  const onResize = function () {
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
    camera.left = ww / -2;
    camera.right = ww / 2;
    camera.top = wh / 2;
    camera.bottom = wh / -2;
    camera.updateProjectionMatrix();
  };

  const onMouseup = function () {
    isMouseDown = false;
  };

  const onMousedown = function (e) {
    isMouseDown = true;
    lastMousePos = { x: e.clientX, y: e.clientY };
  };

  const onMousemove = function (e) {
    if (isMouseDown) {
      camera.position.x += (e.clientX - lastMousePos.x) / 100;
      camera.position.y -= (e.clientY - lastMousePos.y) / 100;
      camera.lookAt(centerVector);
      lastMousePos = { x: e.clientX, y: e.clientY };
    }
  };

  const drawTheMap = function (imagedata) {
    const geometry = new THREE.Geometry();
    const material = new THREE.PointsMaterial();
    material.vertexColors = true;
    material.transparent = true;
    for (let y = 0, y2 = imagedata.height; y < y2; y += 1) {
      for (let x = 0, x2 = imagedata.width; x < x2; x += 1) {
        if (imagedata.data[x * 4 + y * 4 * imagedata.width] > 0) {
          const vertex = new THREE.Vector3();
          vertex.x = x - imagedata.width / 2 + 400;
          vertex.y = -y + imagedata.height / 2;
          vertex.z = -Math.random() * 700;

          vertex.speed = Math.random();

          const position = (x + imagedata.width * y) * 4;

          const data = imagedata.data;
          const pixelColor = {
            r: data[position],
            g: data[position + 1],
            b: data[position + 2],
            a: data[position + 3],
          };
          const color =
            'rgb(' +
            pixelColor.r +
            ', ' +
            pixelColor.g +
            ', ' +
            pixelColor.b +
            ')';
          geometry.colors.push(new THREE.Color(color));
          geometry.vertices.push(vertex);
        }
      }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);
  };

  const render = function () {
    particles.geometry.verticesNeedUpdate = true;
    if (!isMouseDown) {
      camera.position.x += (0 - camera.position.x) * 0.05;
      camera.position.y += (0 - camera.position.y) * 0.05;
      camera.lookAt(centerVector);
    }

    renderer.render(scene, camera);
    animations.push(requestAnimationFrame(render));
  };

  useEffect(() => {
    const canvas = ref.current;

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(ww, wh);

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(
      ww / -2,
      ww / 2,
      wh / 2,
      wh / -2,
      1,
      1000
    );
    camera.position.set(35, 0, 4);
    camera.lookAt(centerVector);
    scene.add(camera);
    camera.zoom = 1;
    camera.updateProjectionMatrix();

    const img = new Image();
    img.src = image;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    img.onload = () => {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imagedata = ctx.getImageData(0, 0, img.width, img.height);
      drawTheMap(imagedata);
      render();
    };

    window.addEventListener('mousemove', onMousemove, false);
    window.addEventListener('mousedown', onMousedown, false);
    window.addEventListener('mouseup', onMouseup, false);
    window.addEventListener('resize', onResize, false);

    return () => {
      animations.forEach((a) => {
        cancelAnimationFrame(a);
      });
      window.removeEventListener('mousemove', onMousemove, false);
      window.removeEventListener('mousedown', onMousedown, false);
      window.removeEventListener('mouseup', onMouseup, false);
      window.removeEventListener('resize', onResize, false);
    };
  });

  return <canvas ref={ref} {...props} />;
};

export default ParticlePhotoCanvas;
