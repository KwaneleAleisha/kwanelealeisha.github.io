import {
  FiBarChart2,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiGrid,
  FiMonitor,
  FiServer,
  FiWifi,
} from "react-icons/fi";
import { FaChartBar, FaWindows } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { SiCisco, SiGnubash, SiLinux } from "react-icons/si";
import { site, toolBox } from "../../data/site";

const toolIcons = {
  database: FiDatabase,
  server: FiServer,
  bash: SiGnubash,
  network: FaNetworkWired,
  cisco: SiCisco,
  globe: FiGlobe,
  branch: FiGitBranch,
  chart: FiBarChart2,
  report: FaChartBar,
  grid: FiGrid,
  windows: FaWindows,
  linux: SiLinux,
  monitor: FiMonitor,
  wifi: FiWifi,
};

export default function ToolBox() {
  const rows = [
    toolBox.filter((_, index) => index % 2 === 0),
    toolBox.filter((_, index) => index % 2 === 1),
  ];

  return (
    <section
      id="tool-box"
      aria-labelledby="tool-box-title"
      className="section-shell section-shell--skills border-t border-white/70 py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="mb-8 max-w-2xl">
          <p data-toolbox-intro className="section-kicker">TOOLS AND TECHNOLOGIES</p>
          <h2
            data-toolbox-intro
            id="tool-box-title"
            className="section-heading mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl"
          >
            {site.copy.toolBoxHeading}
          </h2>
          <p data-toolbox-intro className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            {site.copy.toolBoxDescription}
          </p>
        </div>

        <div className="toolbox-marquee" aria-label="Technology tools">
          {rows.map((row, rowIndex) => (
            <div className="toolbox-marquee-row" key={rowIndex}>
              <ul
                className="toolbox-marquee-track"
                data-toolbox-track={rowIndex === 0 ? "left" : "right"}
                aria-label={`Tool row ${rowIndex + 1}`}
              >
                {[...row, ...row].map((tool, itemIndex) => {
                  const Icon = toolIcons[tool.icon] || FiDatabase;
                  const isClone = itemIndex >= row.length;

                  return (
                    <li
                      key={`${rowIndex}-${tool.name}-${itemIndex}`}
                      aria-hidden={isClone || undefined}
                      className={`toolbox-marquee-item glass-card glass-card--${tool.tone}`}
                    >
                      <span className={`glass-icon glass-icon--${tool.tone}`}>
                        <Icon aria-hidden="true" size={21} />
                      </span>
                      <span className="toolbox-card-name">{tool.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
