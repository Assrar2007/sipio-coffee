import React, { useEffect, useRef, useState, useCallback } from 'react';
import { getAssetUrl } from '../../lib/utils';

const TOTAL_FRAMES = 300;

interface CoffeeScrollSequenceProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onProgressChange?: (progress: number, currentFrame: number) => void;
}

export const CoffeeScrollSequence: React.FC<CoffeeScrollSequenceProps> = ({
  containerRef,
  onProgressChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const loadedSetRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Pad frame number: 1 -> "001"
  const getPaddedIndex = (index: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
    return String(clamped).padStart(3, '0');
  };

  // Synchronous getter / background loader
  const getOrLoadFrame = useCallback((index: number): HTMLImageElement => {
    const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
    const existing = imagesRef.current[clamped];
    if (existing) {
      return existing;
    }

    const img = new Image();
    img.src = getAssetUrl(`/frames/ezgif-frame-${getPaddedIndex(clamped)}.png`);
    img.onload = () => {
      loadedSetRef.current.add(clamped);
      if (clamped === 1) {
        setFirstFrameReady(true);
      }
      // If the newly loaded frame is what's currently active on screen, draw it immediately
      const active = Math.round(currentFrameRef.current);
      if (active === clamped || lastDrawnFrameRef.current === -1) {
        drawFrame(clamped);
      }
    };
    img.onerror = () => {
      console.warn(`Frame ${clamped} failed to load`);
    };

    imagesRef.current[clamped] = img;
    return img;
  }, []);

  // Find the closest loaded frame to prevent any blank flashing
  const getClosestLoadedImage = useCallback((target: number): HTMLImageElement | null => {
    const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(target)));
    // Target first
    if (loadedSetRef.current.has(clamped) && imagesRef.current[clamped]?.complete) {
      return imagesRef.current[clamped];
    }
    // Search outward
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = clamped - offset;
      if (prev >= 1 && loadedSetRef.current.has(prev) && imagesRef.current[prev]?.complete) {
        return imagesRef.current[prev];
      }
      const next = clamped + offset;
      if (next <= TOTAL_FRAMES && loadedSetRef.current.has(next) && imagesRef.current[next]?.complete) {
        return imagesRef.current[next];
      }
    }
    return null;
  }, []);

  // Preload surrounding frames around scroll position
  const preloadSurrounding = useCallback((center: number) => {
    const min = Math.max(1, center - 6);
    const max = Math.min(TOTAL_FRAMES, center + 20);
    for (let i = min; i <= max; i++) {
      getOrLoadFrame(i);
    }
  }, [getOrLoadFrame]);

  // Draw frame on canvas with aspect ratio cover
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const target = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
    const img = getClosestLoadedImage(target);

    // Make sure the target frame is at least requested
    getOrLoadFrame(target);

    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    const cw = canvas.width;
    const ch = canvas.height;
    if (cw === 0 || ch === 0) return;

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const imgRatio = iw / ih;
    const canvasRatio = cw / ch;

    let dw = cw;
    let dh = ch;
    let dx = 0;
    let dy = 0;

    if (canvasRatio > imgRatio) {
      dw = cw;
      dh = cw / imgRatio;
      dy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * imgRatio;
      dx = (cw - dw) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clear background to dark espresso before drawing
    ctx.fillStyle = '#171008';
    ctx.fillRect(0, 0, cw, ch);

    ctx.drawImage(img, dx, dy, dw, dh);
    lastDrawnFrameRef.current = target;
  }, [getClosestLoadedImage, getOrLoadFrame]);

  // Resize canvas to match its container exactly
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const width = (parent && parent.clientWidth) || window.innerWidth;
    const height = (parent && parent.clientHeight) || window.innerHeight;

    if (width <= 0 || height <= 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.floor(width * dpr);
    const targetH = Math.floor(height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Mount & initial batch preloading
  useEffect(() => {
    handleResize();

    // 1. Immediately request Frame 1
    const f1 = getOrLoadFrame(1);
    if (f1.complete && f1.naturalWidth > 0) {
      setFirstFrameReady(true);
      drawFrame(1);
    }

    // 2. Preload first 20 frames for initial scrub
    for (let i = 2; i <= 20; i++) {
      getOrLoadFrame(i);
    }

    // 3. Preload keyframes throughout the 300 frames in non-blocking batches
    const keyframes: number[] = [];
    for (let k = 25; k <= TOTAL_FRAMES; k += 6) {
      keyframes.push(k);
    }
    if (!keyframes.includes(TOTAL_FRAMES)) keyframes.push(TOTAL_FRAMES);

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < keyframes.length) {
        getOrLoadFrame(keyframes[idx]);
        if (idx + 1 < keyframes.length) getOrLoadFrame(keyframes[idx + 1]);
        idx += 2;
      } else {
        clearInterval(interval);
      }
    }, 40);

    const ro = new ResizeObserver(() => handleResize());
    if (canvasRef.current?.parentElement) {
      ro.observe(canvasRef.current.parentElement);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, getOrLoadFrame, drawFrame]);

  // Scroll listener tracking section-relative progress
  useEffect(() => {
    const calculateProgress = () => {
      if (!containerRef.current) return;
      if (prefersReducedMotionRef.current) {
        targetFrameRef.current = 1;
        return;
      }

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;

      if (totalScrollable > 0) {
        // -rect.top is how many pixels have scrolled past the top of the viewport
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

        // Map progress directly to frames 1..300
        const target = 1 + progress * (TOTAL_FRAMES - 1);
        targetFrameRef.current = target;

        if (onProgressChange) {
          onProgressChange(progress, Math.round(target));
        }

        // Preload around target
        preloadSurrounding(Math.round(target));
      }
    };

    const onScroll = () => {
      calculateProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [containerRef, onProgressChange, preloadSurrounding]);

  // Continuous animation loop: smooth frame interpolation & canvas rendering
  useEffect(() => {
    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      const delta = target - current;

      if (Math.abs(delta) > 0.05) {
        // Fast, smooth, responsive easing
        currentFrameRef.current += delta * 0.32;
      } else {
        currentFrameRef.current = target;
      }

      const activeFrame = Math.round(currentFrameRef.current);

      // Redraw if active frame changed OR if target image has loaded and hasn't been drawn yet
      if (
        activeFrame !== lastDrawnFrameRef.current ||
        (loadedSetRef.current.has(activeFrame) && lastDrawnFrameRef.current !== activeFrame)
      ) {
        drawFrame(activeFrame);
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  return (
    <div className="relative w-full h-full bg-espresso flex items-center justify-center overflow-hidden">
      {/* HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        aria-label="Interactive coffee pour animation"
      />

      {/* Fallback image poster while frame 1 is decoding (prevents any blank flash) */}
      {!firstFrameReady && (
        <img
          src={getAssetUrl('/frames/ezgif-frame-001.png')}
          alt="SIPIO Signature Coffee"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}
    </div>
  );
};
