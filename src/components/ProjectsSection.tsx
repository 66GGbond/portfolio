import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    num: '01',
    category: 'AIGC Artwork',
    name: 'AI视频',
    col1Img1: '/gallery/images/NiceTry/1.png',
    col1Img2: '/gallery/images/NiceTry/2.png',
    col2Video: '/gallery/videos/NiceTry.mp4',
  },
  {
    num: '02',
    category: 'AIGC Artwork',
    name: 'AI商拍',
    col1Img1: '/gallery/images/Commercial/necklace.png',
    col1Img2: '/gallery/images/Commercial/necklaceAI.png',
    col2Img1: '/gallery/images/Commercial/bracelet.png',
    col2Img2: '/gallery/images/Commercial/braceletAI.png',
  },
  {
    num: '03',
    category: 'AIGC Artwork',
    name: '人设概念系列图',
    col1Img1: '/gallery/images/Moon/CharacterSheet.png',
    col1Img2: '/gallery/images/Moon/A1.png',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - 1 - index) * 0.03]
  );

  return (
    <div className="h-[85vh] relative">
      <motion.div
        ref={ref}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-dark p-4 sm:p-6 md:p-8"
        style={{
          scale,
          top: `${index * 28}px`,
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-light/60 font-light uppercase tracking-wider text-sm sm:text-base">
                {project.category}
              </p>
              <h3
                className="text-light font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors">
            View Project
          </button>
        </div>

        {/* Image grid */}
        {'col2Img1' in project ? (
          /* Three-column layout (Project 1): AI大图 | AI大图 | 原图竖排 */
          <div className="flex gap-4" style={{ height: 'clamp(450px, 60vw, 800px)' }}>
            {/* Left: necklaceAI 大图 */}
            <div className="w-1/3 h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10">
              <img src={project.col1Img2} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            {/* Middle: braceletAI 大图 */}
            <div className="w-1/3 h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10">
              <img src={project.col2Img2} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            {/* Right: 原图 竖排 */}
            <div className="w-1/3 h-full flex flex-col gap-2">
              <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10 aspect-[3/4] max-h-[55%] w-full">
                <img src={project.col2Img1} alt="" className="w-full h-full object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10 min-h-0">
                <img src={project.col1Img1} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </div>
          </div>
        ) : 'col2Video' in project ? (
          /* Video layout (Project 2): 左二图 + 右一视频 */
          <div className="flex gap-4" style={{ height: 'clamp(350px, 50vw, 700px)' }}>
            <div className="w-[40%] h-full flex flex-col gap-4">
              <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10">
                <img src={project.col1Img1} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10">
                <img src={project.col1Img2} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </div>
            <div
              className="w-[60%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10 relative group cursor-pointer"
              onClick={() => {
                const v = videoRef.current;
                if (!v) return;
                if (v.paused) { v.play(); setVideoPlaying(true); }
                else { v.pause(); setVideoPlaying(false); }
              }}
            >
              <video ref={videoRef} src={project.col2Video} className="w-full h-full object-cover" playsInline preload="metadata" />
              {!videoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : 'col2Img' in project ? (
          /* Three-image layout (Project 3) */
          <div className="flex gap-4" style={{ height: 'clamp(300px, 45vw, 600px)' }}>
            <div className="w-[40%] h-full flex flex-col gap-4">
              <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10">
                <img src={project.col1Img1} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="flex-[2] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10">
                <img src={project.col1Img2} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </div>
            <div className="w-[60%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10">
              <img src={(project as typeof project & {col2Img: string}).col2Img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        ) : (
          /* Two-image layout (Project 1): CharacterSheet 大 + A1 小 */
          <div className="flex gap-4" style={{ height: 'clamp(350px, 50vw, 700px)' }}>
            <div className="w-[70%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10">
              <img src={project.col1Img1} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div className="w-[30%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10">
              <img src={project.col1Img2} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="mt-16 sm:mt-20 md:mt-28">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
