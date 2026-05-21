import Navbar from './Navbar';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20}>
        <Navbar />
      </FadeIn>

      {/* Main heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, I&apos;m Syla
        </h1>
      </FadeIn>

      {/* Hero portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3}>
          <img src="./Syla.png" alt="Syla" className="w-full h-auto object-contain" />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="text-light font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            An AIGC designer driven by AI-powered creativity and stunning visual storytelling.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
