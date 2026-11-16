import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { site } from "../../data/site";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-section network-backdrop relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="hero-orb hero-orb--blue" />
      <div aria-hidden="true" className="hero-orb hero-orb--violet" />
      <div aria-hidden="true" className="hero-orb hero-orb--cyan" />

      <svg
        aria-hidden="true"
        className="hero-network pointer-events-none absolute right-0 top-20 hidden h-56 w-[46%] md:block"
        viewBox="0 0 620 220"
        fill="none"
      >
        <path
          d="M0 46h124l52 52h150l48-48h246M0 142h168l42-42h122l50 50h238"
          stroke="#5478F5"
          strokeOpacity=".2"
          strokeWidth="2"
        />
        <path
          className="fiber-pulse"
          d="M0 46h124l52 52h150l48-48h246"
          stroke="#5478F5"
          strokeOpacity=".9"
          strokeWidth="2.2"
          strokeDasharray="16 64"
        />
        <path
          className="fiber-pulse"
          d="M0 142h168l42-42h122l50 50h238"
          stroke="#8B7CF6"
          strokeOpacity=".8"
          strokeWidth="1.8"
          strokeDasharray="12 72"
        />
        <circle cx="124" cy="46" r="4" fill="#5478F5" />
        <circle cx="326" cy="98" r="4" fill="#8B7CF6" />
        <circle cx="210" cy="100" r="4" fill="#5478F5" />
      </svg>

      <div className="hero-container relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="hero-grid grid items-center gap-3 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative z-10">
            <p className="hero-role">{site.role}</p>

            <h1
              data-hero-heading
              id="hero-title"
              className="hero-heading mt-4 text-[clamp(3.4rem,8vw,7.6rem)] font-semibold leading-[1.08] tracking-[-0.075em] text-slate-950 md:mt-6"
            >
              Kwanele
              <span className="hero-heading-accent block">Ngwenya.</span>
            </h1>

            <p
              data-hero-description
              className="hero-description mt-4 max-w-[570px] text-base leading-6 text-slate-600 md:mt-8 md:leading-8 md:text-lg"
            >
              {site.intro}
            </p>

            <div className="hero-actions mt-5 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
              <a
                data-hero-action
                href="#training"
                className="button-primary"
              >
                {site.copy.heroAction}
                <FiArrowUpRight aria-hidden="true" size={18} />
              </a>

              <a
                data-hero-action
                href={site.cv}
                download="Kwanele-Ngwenya-CV.pdf"
                className="button-glass"
              >
                {site.copy.downloadCv}
                <FiDownload aria-hidden="true" size={16} />
              </a>
            </div>

            <a href="#about" className="hero-scroll-link mt-5 inline-flex items-center gap-3 md:mt-12">
              <span className="hero-scroll-icon"><FiArrowDownRight aria-hidden="true" /></span>
              Scroll to explore
            </a>
          </div>

          <div data-hero-portrait className="hero-portrait-wrap relative mx-auto w-full max-w-[500px] lg:ml-auto">
            <div aria-hidden="true" className="hero-portrait-glow" />
            <div className="hero-portrait-glass">
              <img
                data-hero-image
                src={site.portrait}
                alt="Portrait of Kwanele Ngwenya"
                width="800"
                height="1000"
                className="hero-portrait-image"
                loading="eager"
                fetchPriority="high"
              />

              <div className="hero-portrait-caption">
                <div>
                  <span className="hero-caption-label">AREAS OF FOCUS</span>
                  <p>IT Support · Networks · Systems</p>
                </div>
                <span className="hero-caption-mark" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
            <span aria-hidden="true" className="hero-portrait-ring hero-portrait-ring--one" />
            <span aria-hidden="true" className="hero-portrait-ring hero-portrait-ring--two" />
          </div>
        </div>
      </div>
    </section>
  );
}
