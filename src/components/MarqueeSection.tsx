import { useRef, useState, useEffect } from 'react';

// Images from the user's gallery folder - replace with your own
const row1Images = [
  '/gallery/images/02.png',
  '/gallery/images/04.png',
  '/gallery/images/12.png',
  '/gallery/images/13.png',
  '/gallery/images/25.png',
  '/gallery/images/07.png',
  '/gallery/images/22.png',
  '/gallery/images/00.png',
  '/gallery/images/03.png',
];

const row2Images = [
  '/gallery/images/05.png',
  '/gallery/images/10.png',
  '/gallery/images/18.png',
  '/gallery/images/21.png',
  '/gallery/images/16.png',
  '/gallery/images/20.png',
  '/gallery/images/19.png',
  '/gallery/images/24.png',
  '/gallery/images/01.png',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      setOffset(
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Repeated = [...row1Images, ...row1Images, ...row1Images].slice(0, 33);
  const row2Repeated = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section ref={sectionRef} className="bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      {/* Row 1 - scrolls right */}
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {row1Repeated.map((src, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Marquee ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 2 - scrolls left */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(-${offset - 200}px)`, willChange: 'transform' }}
      >
        {row2Repeated.map((src, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Marquee ${i + 12}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
