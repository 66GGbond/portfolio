import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'AIGC Visual Design',
    desc: 'Creation of character concepts, scene illustrations, KV sketches, and foundational commercial visual content using cutting-edge AI tools.',
  },
  {
    num: '02',
    name: 'Prompt Engineering',
    desc: 'Precise composition design, style consistency control, and detailed visual direction through expertly crafted prompts for stable, repeatable results.',
  },
  {
    num: '03',
    name: 'AI Video Generation',
    desc: 'Dynamic video creation and editing using Runway, Kling, Jimeng, and other AI video platforms — from concept to final cut.',
  },
  {
    num: '04',
    name: 'Post-Production Polish',
    desc: 'Combining AI-generated outputs with Photoshop post-processing and editing to refine, enhance, and deliver visually polished final assets.',
  },
  {
    num: '05',
    name: 'End-to-End Delivery',
    desc: 'Complete project workflow from AI generation to final organized output — ensuring professional visual expression and reliable delivery.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-dark leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-28 flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div
              className={`flex items-start gap-8 sm:gap-12 md:gap-16 py-8 sm:py-10 md:py-12 ${
                i < services.length - 1
                  ? 'border-b border-[rgba(12,12,12,0.15)]'
                  : ''
              }`}
            >
              <span
                className="font-black text-dark leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <h3
                  className="font-medium uppercase text-dark"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-dark/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
