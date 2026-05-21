import { useState, useMemo } from 'react';
import { X, Play, Image, Film, FolderOpen } from 'lucide-react';
import FadeIn from './FadeIn';

type MediaType = 'all' | 'image' | 'video';

interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  category: MediaType;
  title: string;
}

// === CONFIGURE YOUR MEDIA HERE ===
// Add your image/video filenames below after placing them in public/gallery/images/ or public/gallery/videos/
//const galleryItems: GalleryItem[] = [
  // AI Images - place files in public/gallery/images/
  // { src: '/gallery/images/your-image.png', type: 'image', category: 'image', title: 'Your Image Title' },
  // AI Videos - place files in public/gallery/videos/
  // { src: '/gallery/videos/your-video.mp4', type: 'video', category: 'video', title: 'Your Video Title' },
  // Project cases
  // { src: '/gallery/images/your-project.png', type: 'image', category: 'project', title: 'Project Name' },
//];

// Generate placeholder items if no real items configured
const galleryItems: GalleryItem[] = [
  { src: '/gallery/images/02.png', type: 'image', category: 'image', title: '黑曜启示录' },
  { src: '/gallery/images/04.png', type: 'image', category: 'image', title: '岁月的温柔注视' },
  { src: '/gallery/images/12.png', type: 'image', category: 'image', title: '媚俗美学' },
  { src: '/gallery/images/13.png', type: 'image', category: 'image', title: '新肉身' },
  { src: '/gallery/images/25.png', type: 'image', category: 'image', title: '流水落花春去也' },
  { src: '/gallery/images/07.png', type: 'image', category: 'image', title: '树荫之下' },
  { src: '/gallery/images/22.png', type: 'image', category: 'image', title: '绮罗' },
  { src: '/gallery/images/00.png', type: 'image', category: 'image', title: '生命的光泽' },
  { src: '/gallery/images/03.png', type: 'image', category: 'image', title: '精神性的生活' },
  { src: '/gallery/images/05.png', type: 'image', category: 'image', title: '沉默的力量' },
  { src: '/gallery/images/10.png', type: 'image', category: 'image', title: '金色的生命' },
  { src: '/gallery/images/16.png', type: 'image', category: 'image', title: '玉生烟' },
  { src: '/gallery/images/21.png', type: 'image', category: 'image', title: '文明回音' },
  { src: '/gallery/images/18.png', type: 'image', category: 'image', title: '月色' },
  { src: '/gallery/images/20.png', type: 'image', category: 'image', title: '蒜皮王八' },
  { src: '/gallery/images/19.png', type: 'image', category: 'image', title: '桃夭' },
  { src: '/gallery/images/24.png', type: 'image', category: 'image', title: '静候葡萄成熟时' },
  { src: '/gallery/images/01.png', type: 'image', category: 'image', title: '暮光球场' },
 { src: '/gallery/videos/NiceTry.mp4', type: 'video', category: 'video', title: 'Nice Try' },
 { src: '/gallery/videos/机甲.mp4', type: 'video', category: 'video', title: '机甲' },
 { src: '/gallery/videos/盼归.mp4', type: 'video', category: 'video', title: '盼归' },
];

const displayItems: GalleryItem[] =
  galleryItems.length > 0
    ? galleryItems
    : [
        { src: '/gallery/images/placeholder-1.svg', type: 'image', category: 'image', title: 'Your AI Image 1' },
        { src: '/gallery/images/placeholder-2.svg', type: 'image', category: 'image', title: 'Your AI Image 2' },
        { src: '/gallery/images/placeholder-3.svg', type: 'image', category: 'image', title: 'Your AI Image 3' },
        { src: '/gallery/images/placeholder-4.svg', type: 'image', category: 'image', title: 'Your AI Image 4' },
        { src: '/gallery/images/placeholder-5.svg', type: 'image', category: 'image', title: 'Your AI Image 5' },
        { src: '/gallery/images/placeholder-6.svg', type: 'image', category: 'image', title: 'Your AI Image 6' },
        { src: '/gallery/images/placeholder-7.svg', type: 'video', category: 'video', title: 'Your AI Video 1' },
        { src: '/gallery/images/placeholder-8.svg', type: 'video', category: 'video', title: 'Your AI Video 2' },
      ];

const tabs: { key: MediaType; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All', icon: <FolderOpen size={18} /> },
  { key: 'image', label: 'AI Images', icon: <Image size={18} /> },
  { key: 'video', label: 'AI Videos', icon: <Film size={18} /> },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<MediaType>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () =>
      activeTab === 'all'
        ? displayItems
        : displayItems.filter((item) => item.category === activeTab),
    [activeTab]
  );

  return (
    <>
      <section
        id="gallery"
        className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Gallery
          </h2>
        </FadeIn>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-10 sm:mt-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-[#D7E2EA] text-dark'
                  : 'text-[#D7E2EA] border border-[#D7E2EA]/30 hover:border-[#D7E2EA]/70'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-12 md:mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {filtered.map((item, i) => (
            <FadeIn key={`${item.src}-${i}`} delay={i * 0.05} y={20}>
              <div
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-[#1a1a2e] border border-[#D7E2EA]/10 cursor-pointer group relative hover:border-[#D7E2EA]/40 transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                {item.type === 'video' ? (
                  <div className="relative">
                    <video
                      src={item.src}
                      className="w-full aspect-video object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Play
                        size={48}
                        className="text-white/60 group-hover:text-white/90 transition-colors drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute top-2 right-2 bg-dark/80 rounded-full p-1.5">
                      <Film size={14} className="text-light" />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        const parent = el.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0C0C0C] flex items-center justify-center"><span class="text-4xl">🖼️</span></div>`;
                        }
                      }}
                    />
                  </div>
                )}
                <div className="p-3 sm:p-4">
                  <p className="text-light/80 text-sm sm:text-base font-medium">
                    {item.title}
                  </p>
                  <p className="text-light/40 text-xs uppercase tracking-wider mt-1">
                    {item.category === 'image' ? 'AI Image' : 'AI Video'}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-light/40 mt-16 font-light text-lg">
            No items in this category yet. Add your work to get started!
          </p>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>

          {lightbox.type === 'video' ? (
            <div
              className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightbox.src}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            </div>
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-4xl max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                const parent = el.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'max-w-lg w-full h-64 bg-[#1a1a2e] rounded-2xl flex items-center justify-center text-light/40 text-lg';
                  fallback.textContent = '🖼️ Image not found — add your images to public/gallery/images/';
                  parent.appendChild(fallback);
                }
              }}
            />
          )}

          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-medium text-lg">{lightbox.title}</p>
            <p className="text-white/50 text-sm uppercase tracking-wider">
              {lightbox.category === 'image'
                ? 'AI Image'
                : 'AI Video'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
