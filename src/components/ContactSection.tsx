import { Mail, MapPin, GraduationCap, Phone } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Contact links */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          <FadeIn delay={0.1} y={20}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-[#D7E2EA]" />
              </div>
              <div>
                <p className="text-light/50 text-xs uppercase tracking-wider">Email</p>
                <p className="text-light font-medium text-base sm:text-lg">3305906800@qq.com</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#D7E2EA]" />
              </div>
              <div>
                <p className="text-light/50 text-xs uppercase tracking-wider">Location</p>
                <p className="text-light font-medium text-base sm:text-lg">Anhui, China</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-[#D7E2EA]" />
              </div>
              <div>
                <p className="text-light/50 text-xs uppercase tracking-wider">Mobile</p>
                <p className="text-light font-medium text-base sm:text-lg">166 5536 6781</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} className="text-[#D7E2EA]" />
              </div>
              <div>
                <p className="text-light/50 text-xs uppercase tracking-wider">Education</p>
                <p className="text-light font-medium text-base sm:text-lg">
                  AUST · Digital Media Tech
                </p>
                <p className="text-light/40 text-sm">2023 - 2027 · Bachelor&apos;s Degree</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.5} y={20}>
          <div className="pt-8 border-t border-[#D7E2EA]/10 text-center">
            <p className="text-light/30 text-sm font-light">
              &copy; {new Date().getFullYear()} Syla. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
