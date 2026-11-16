import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { site } from "../../data/site";

const contactItems = [
  { label: site.email, href: site.emailHref, Icon: FiMail, tone: "blue" },
  { label: site.phone, href: site.phoneHref, Icon: FiPhone, tone: "violet" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-shell section-shell--contact border-t border-white/70 py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="contact-glass-panel">
          <div aria-hidden="true" className="contact-orb contact-orb--one" />
          <div aria-hidden="true" className="contact-orb contact-orb--two" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="section-kicker section-kicker--light">LET'S CONNECT</p>
              <h2
                data-contact-intro
                id="contact-title"
                className="mt-4 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 md:text-6xl"
              >
                {site.copy.contactHeading}.
              </h2>
              <p
                data-contact-intro
                className="mt-6 max-w-[58ch] text-base leading-8 text-slate-600"
              >
                {site.careerFocus}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map(({ label, href, Icon, tone }) => (
                <a
                  key={href}
                  data-contact-link
                  href={href}
                  className="contact-method glass-card"
                >
                  <span className={`glass-icon glass-icon--${tone}`}>
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-800 md:text-base">
                    {label}
                  </span>
                  <FiArrowUpRight className="shrink-0 text-slate-500" aria-hidden="true" />
                </a>
              ))}

              {site.linkedin && (
                <a
                  data-contact-link
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method glass-card"
                >
                  <span className="glass-icon glass-icon--cyan">
                    <FiLinkedin aria-hidden="true" size={20} />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-slate-800 md:text-base">LinkedIn</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}

              {site.github && (
                <a
                  data-contact-link
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method glass-card"
                >
                  <span className="glass-icon glass-icon--slate">
                    <FiGithub aria-hidden="true" size={20} />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-slate-800 md:text-base">GitHub</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}

              <a
                data-contact-link
                href={site.cv}
                download="Kwanele-Ngwenya-CV.pdf"
                className="contact-cv-link"
              >
                {site.copy.downloadCv}
                <FiDownload aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
