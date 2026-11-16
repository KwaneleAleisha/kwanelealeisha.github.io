import { FiRadio, FiGitBranch, FiArrowUpRight } from "react-icons/fi";
import { site, training } from "../../data/site";

const trainingIcons = [FiRadio, FiGitBranch];

export default function Training() {
  return (
    <section
      id="training"
      aria-labelledby="training-title"
      className="section-shell section-shell--training border-t border-white/70 py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">CONTINUOUS LEARNING</p>
          <h2
            data-training-intro
            id="training-title"
            className="section-heading mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl"
          >
            {site.copy.trainingHeading}
          </h2>
          <p
            data-training-intro
            className="mt-5 text-base leading-8 text-slate-600 md:text-lg"
          >
            {site.copy.trainingNote}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {training.map((entry, index) => {
            const Icon = trainingIcons[index] || FiRadio;

            return (
              <article
                key={entry.title}
                data-training-card
                className={`training-glass-card glass-card glass-card--tone-${index + 1}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`glass-icon ${index === 0 ? "glass-icon--cyan" : "glass-icon--violet"}`}>
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <span className="training-label">COURSE 0{index + 1}</span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-blue-700">
                  {entry.provider}
                </p>

                <ul className="training-topics mt-7 space-y-3">
                  {entry.topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="training-check" aria-hidden="true">
                        <FiArrowUpRight size={13} />
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
