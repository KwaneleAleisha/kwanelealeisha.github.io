import { FiBookOpen, FiBox, FiGrid, FiHome, FiMail } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home", Icon: FiHome },
  { label: "Skills", href: "#skills", Icon: FiGrid },
  { label: "Tool Box", href: "#tool-box", Icon: FiBox },
  { label: "Training", href: "#training", Icon: FiBookOpen },
  { label: "Contact", href: "#contact", Icon: FiMail },
];

export default function MobileBottomNav() {
  return (
    <nav aria-label="Mobile navigation" className="mobile-bottom-nav md:hidden">
      {links.map(({ label, href, Icon }) => (
        <a key={href} href={href} className="mobile-bottom-link">
          <Icon aria-hidden="true" size={19} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
