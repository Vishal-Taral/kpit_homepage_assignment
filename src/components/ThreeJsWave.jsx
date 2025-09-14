import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsWave = ({ enableCursorMovement = false }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const SEPARATION = 10, AMOUNTX = 100, AMOUNTY = 35;
    let container = mountRef.current;
    let camera, scene, renderer, particles, count = 0;
    let mouseX = 0;

    let width = window.innerWidth;
    let height = container.offsetHeight;

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(65, width / height, 1, 10000);
      camera.position.set(0, 150, 400);

      scene = new THREE.Scene();

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0, j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          positions[i + 1] = 0;
          positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
          scales[j] = 0.8;
          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color('#a3e635') },
        },
        vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        transparent: true,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      if (enableCursorMovement) {
        window.addEventListener('mousemove', onMouseMove);
      }
      window.addEventListener('resize', onWindowResize);
    }

    function onMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    }

    function onWindowResize() {
      width = window.innerWidth;
      height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      let i = 0, j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const baseX = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          const waveX = Math.sin((ix + count) * 0.3);
          const waveY = Math.sin((iy + count) * 0.5);
          if (enableCursorMovement) {
           
            const influence = mouseX * -70;
            positions[i] = baseX + influence;
            positions[i + 1] = (waveX + waveY) * -8; // Original y-axis wave
            scales[j] = ((waveX + 1) + (waveY + 1)) * 4; // Original scale
          } else {
            // Original wave animation
            positions[i] = baseX;
            positions[i + 1] = (waveX + waveY) * -14;
            scales[j] = ((waveX + 1) + (waveY + 1)) * 4;
          }
          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      count += 0.1;
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      window.removeEventListener('resize', onWindowResize);
      if (enableCursorMovement) {
        window.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [enableCursorMovement]);

  return (
    <div
      ref={mountRef}
      className="absolute bottom-[-150px] left-0 w-full h-[800px] pointer-events-none z-0"
    />
  );
};

export default ThreeJsWave;