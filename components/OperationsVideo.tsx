'use client';

import { useEffect, useRef } from 'react';

export default function OperationsVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (!video.current) return;
      if (motion.matches) {
        video.current.pause();
      } else {
        video.current.play().catch(() => undefined);
      }
    };

    syncPlayback();
    motion.addEventListener('change', syncPlayback);
    return () => motion.removeEventListener('change', syncPlayback);
  }, []);

  return (
    <video
      ref={video}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/media/control-room-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/media/control-room.mp4" type="video/mp4" />
    </video>
  );
}
