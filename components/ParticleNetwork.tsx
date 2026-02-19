'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleNetwork() {
  const [init, setInit] = useState(false);

  // Initialize the particle engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-10" // z-10 places it above image, below text
      options={{
        fullScreen: { enable: false }, // Crucial: restricts it to this container
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab', // 'grab' creates the web effect on mouse hover
            },
          },
          modes: {
            grab: {
              distance: 200, // Distance to grab links
              links: {
                opacity: 0.8,
              },
            },
          },
        },
        particles: {
          // THE NODES (DOTS)
          color: {
            value: '#ffffff',
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // High density for visibility
          },
          opacity: {
            value: 0.6, // High opacity for visibility
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 2, max: 4 }, // Larger dots
          },
          // THE LINKS (LINES)
          links: {
            color: '#60a5fa', // Blue-400 (Matches your brand theme)
            distance: 150,
            enable: true,
            opacity: 0.5, // Visible lines
            width: 1.5, // Thicker lines for "Very Visible" requirement
          },
          // THE MOVEMENT
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1.5, // Slow, deliberate movement (Engineering feel)
            straight: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
