import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: ReactMouseEvent | ReactTouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as ReactMouseEvent).clientX;

    setSliderPosition(Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100)));
  };

  useEffect(() => {
    const handleUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section className="py-32 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="small-caps mb-4 block">The Results</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">
              Uncompromising <br />
              <span className="italic">Transformation</span>
            </h2>
          </div>
          <p className="text-white/50 font-light max-w-sm mb-2">
            Witness the difference of professional-grade ceramic coating and paint correction.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl cursor-col-resize select-none"
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
            alt="After Detailing" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Before Image */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&blur=10" 
              alt="Before Detailing" 
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute inset-y-0 w-[1px] bg-white z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-black rounded-full" />
                <div className="w-1 h-3 bg-black rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-20 small-caps bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
            Before
          </div>
          <div className="absolute bottom-6 right-6 z-20 small-caps bg-white text-black px-4 py-2 rounded-full">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
