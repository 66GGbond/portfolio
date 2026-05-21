import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden sm:flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-light font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="sm:hidden flex justify-end px-6 pt-6">
        <button onClick={() => setOpen(!open)} className="text-light z-50">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-light font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
