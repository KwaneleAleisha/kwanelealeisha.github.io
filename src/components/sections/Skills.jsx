import {
  FiMonitor,
  FiWifi,
  FiGitBranch,
  FiShield,
  FiDatabase,
  FiSearch,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";
import { site, skills } from "../../data/site";

const skillIcons = [
  FiMonitor,
  FiWifi,
  FiGitBranch,
  FiShield,
  FiDatabase,
  FiSearch,
  FiBriefcase,
  FiUsers,
];

const skillTones = [
  "blue",
  "cyan",
  "violet",
  "indigo",
  "mint",
  "amber",
  "rose",
  "slate",
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-shell section-shell--skills border-t border-white/70 py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">WHAT I WORK WITH</p>
            <h2
              data-skills-heading
              id="skills-title"
              className="section-heading mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl"
            >
              {site.copy.skillsHeading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600 md:text-base">
            A growing toolkit built through coursework, practical exercises and
            a genuine interest in how technology works.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skillIcons[index] || FiMonitor;
            const tone = skillTones[index] || "blue";

            return (
              <div
                key={skill.name}
                data-skill-card
                className={`skill-glass-card glass-card glass-card--${tone}`}
              >
                <div className="skill-card-heading">
                  <span className={`glass-icon glass-icon--${tone}`}>
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="glass-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <dt className="mt-7 text-lg font-semibold tracking-[-0.025em] text-slate-950">
                  {skill.name}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-slate-600">
                  {skill.items}
                </dd>
                <span aria-hidden="true" className="skill-card-sheen" />
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
