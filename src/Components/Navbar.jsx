import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <nav className="w-full px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Your Name / Brand */}
          <a href="#home" className="text-xl font-bold text-white">
            Vikas Pandey
          </a>
          {/* Right: Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex flex-col justify-center items-center p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
          >
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-blue-400 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
