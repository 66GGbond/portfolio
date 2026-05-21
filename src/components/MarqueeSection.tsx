import { useRef, useState, useEffect } from 'react';

// Images from the user's gallery folder - replace with your own
const row1Images = [
  './gallery/images/02.jpg',
  './gallery/images/04.jpg',
  './gallery/images/12.jpg',
  './gallery/images/13.jpg',
  './gallery/images/25.jpg',
  './gallery/images/07.jpg',
  './gallery/images/22.jpg',
  './gallery/images/00.jpg',
  './gallery/images/03.jpg',
];

const row2Images = [
  './gallery/images/05.jpg',
  './gallery/images/10.jpg',
  './gallery/images/18.jpg',
  './gallery/images/21.jpg',
  './gallery/images/16.jpg',
  './gallery/images/20.jpg',
  './gallery/images/19.jpg',
  './gallery/images/24.jpg',
  './gallery/images/01.jpg',
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
