import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { site } from "../../data/site";

const navigation = site.copy.nav.map((label) => ({
  label,
  href: `#${label.toLowerCase().replace(/\s+/g, "-")}`,
}));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-navbar sticky top-0 z-50">
      <nav className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
        <a
          href="#home"
          className="group flex min-h-11 flex-col justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <span className="text-[17px] font-bold tracking-[-0.8px] text-slate-950">
            Kwanele Ngwenya<span className="text-blue-600">.</span>
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[2px] text-slate-500">
            IT Support & Networking
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-link inline-flex min-h-11 items-center text-[13px] font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar-contact hidden lg:inline-flex">
          {site.copy.getInTouch}
          <FiArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-xl text-slate-950 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="glass-mobile-menu absolute left-0 top-full w-full px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center rounded-xl px-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
