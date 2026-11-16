import { FiBookOpen, FiUsers, FiAward } from "react-icons/fi";
import { site, timeline } from "../../data/site";

const timelineIcons = [FiBookOpen, FiAward, FiUsers];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-shell section-shell--about border-t border-white/70 py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">A LITTLE CONTEXT</p>
          <h2
            data-about-intro
            id="about-title"
            className="section-heading mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl"
          >
            {site.copy.aboutHeading}
          </h2>
          <p
            data-about-intro
            className="mt-6 max-w-[68ch] text-base leading-8 text-slate-600 md:text-lg"
          >
            {site.about}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map((item, index) => {
            const Icon = timelineIcons[index] || FiBookOpen;

            return (
              <article
                key={item.title}
                data-timeline-entry
                className={`timeline-glass-card glass-card glass-card--tone-${index + 1}`}
              >
                <div className="timeline-card-top">
                  <span className="glass-icon glass-icon--blue">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="glass-card-index">0{index + 1}</span>
                </div>

                <p className="timeline-date">{item.date}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  {item.organization}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
