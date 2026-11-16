import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer-shell border-t border-white/70">
      <div
        data-footer-reveal
        className="mx-auto flex min-h-24 max-w-[1440px] flex-col justify-center gap-3 px-6 py-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20"
      >
        <p>© {site.year} {site.name}</p>
        <a href="#home" className="footer-top-link">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
