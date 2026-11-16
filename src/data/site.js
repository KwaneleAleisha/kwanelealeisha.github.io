export const site = {
  name: "Kwanele Ngwenya",
  fullName: "Kwanele Aleisha Ellen Ngwenya",
  role: "Early-career IT Support Services & Networks Professional",
  location: "Johannesburg and Gqeberha, South Africa",
  phone: "068 257 6617",
  phoneHref: "tel:+27682576617",
  email: "kwanelealeisha@gmail.com",
  emailHref: "mailto:kwanelealeisha@gmail.com",
  linkedin: "", // TODO: add URL
  github: "", // TODO: add URL
  portrait: `${import.meta.env.BASE_URL}images/kwanele-portrait.webp`,
  cv: `${import.meta.env.BASE_URL}documents/KAE-Ngwenya-Technical-CV.pdf`,
  year: 2026,
  intro: "Early-career IT professional completing a Diploma in IT at Nelson Mandela University. Focused on IT support, networks and infrastructure, and open to WIL, internship and graduate opportunities.",
  about: "I’m studying IT Support Services at Nelson Mandela University, where I’ve built a foundation in computer systems, networking, cybersecurity, databases and systems analysis. I’ve worked with troubleshooting, network configuration, SQL and data analysis tools. As Deputy Secretary of the NMU Geekulcha Student Society, I also support administration and student collaboration. I’m looking to apply what I’ve learned while continuing to develop practical experience.",
  careerFocus: "Open to internship, Work Integrated Learning (WIL), graduate and entry-level roles in IT support, technical support, network administration, network support, systems administration, IT operations and entry-level cybersecurity.",
  copy: {
    nav: ["About", "Skills", "Tool Box", "Training", "Contact"],
    getInTouch: "Get in touch",
    skipToContent: "Skip to content",
    heroAction: "See my training",
    downloadCv: "Download CV",
    aboutHeading: "About me",
    skillsHeading: "Skills",
    toolBoxHeading: "Tool Box",
    toolBoxDescription: "Tools and technologies included in my studies and networking coursework.",
    trainingHeading: "Networking training",
    trainingNote: "Coursework completed through the Cisco Networking Academy.",
    contactHeading: "Get in touch",
    footerBackToTop: "Back to top",
  },
};

export const facts = [
  { label: "Studying", value: "Final-year Diploma in IT, IT Support Services" },
  { label: "Training", value: "CCNA 1 and CCNA 2 coursework" },
  { label: "Leadership", value: "Deputy Secretary, NMU Geekulcha Student Society" },
  { label: "Looking for", value: "Internship, WIL, graduate and entry-level IT roles" },
];

export const timeline = [
  {
    title: "Higher Certificate in Information Technology, User Support Services",
    organization: "Nelson Mandela University",
    date: "Completed 2023",
    description: "Focused on hardware and software support, networking, operating systems, troubleshooting and end-user support. Practical experience includes diagnosing technical issues, configuring systems, supporting users and working with networks.",
  },
  {
    title: "Diploma in Information Technology, IT Support Services",
    organization: "Nelson Mandela University",
    date: "Final year",
    description: "Focus areas include IT support services, computer networking, cybersecurity, database management, systems analysis, computer hardware and software.",
  },
  {
    title: "Deputy Secretary, NMU Geekulcha Student Society (GKSS)",
    organization: "Nelson Mandela University",
    date: "February 2026 to November 2026",
    description: "Supports the society’s administration and organisation, and contributes to student engagement, communication and collaboration.",
  },
];

export const skills = [
  { name: "IT support and systems", items: "hardware and software troubleshooting, operating systems fundamentals, system maintenance, problem resolution" },
  { name: "Networking", items: "TCP/IP, LAN fundamentals, IPv4 and IPv6 addressing, subnetting, DNS, DHCP, network configuration and troubleshooting" },
  { name: "Cisco networking", items: "Cisco IOS CLI, router and switch configuration, VLANs, trunking, inter-VLAN routing, STP, RSTP, EtherChannel, DHCPv4" },
  { name: "Routing and security", items: "static and default routes, access control lists (ACLs), port security, wireless networking fundamentals, network security principles" },
  { name: "Data", items: "SQL, database management fundamentals, Microsoft Power BI, PowerPivot, data presentation" },
  { name: "Analysis and design", items: "systems analysis, systems design fundamentals, requirements understanding" },
  { name: "Office tools", items: "Microsoft Word, Excel and PowerPoint" },
  { name: "Working style", items: "communication, teamwork, adaptability, time management, organisation" },
];

export const toolBox = [
  { name: "SQL", category: "Data", icon: "database", tone: "blue" },
  { name: "SQL Manager", category: "Database tools", icon: "server", tone: "cyan" },
  { name: "SQL Server Management Studio", category: "Database tools", icon: "server", tone: "violet" },
  { name: "Bash scripting", category: "Command line", icon: "bash", tone: "slate" },
  { name: "Networking", category: "Infrastructure", icon: "network", tone: "cyan" },
  { name: "Cisco IOS CLI", category: "Networking", icon: "cisco", tone: "blue" },
  { name: "TCP/IP and IP addressing", category: "Networking", icon: "globe", tone: "indigo" },
  { name: "VLANs and subnetting", category: "Networking", icon: "branch", tone: "violet" },
  { name: "DNS and DHCP", category: "Networking", icon: "server", tone: "mint" },
  { name: "PowerPivot", category: "Data and reporting", icon: "chart", tone: "amber" },
  { name: "Power BI", category: "Data and reporting", icon: "report", tone: "amber" },
  { name: "Microsoft Excel", category: "Productivity", icon: "grid", tone: "mint" },
  { name: "Windows", category: "Operating systems", icon: "windows", tone: "blue" },
  { name: "Linux", category: "Operating systems", icon: "linux", tone: "slate" },
  { name: "IT support and troubleshooting", category: "Systems support", icon: "monitor", tone: "rose" },
];

export const training = [
  {
    title: "CCNA 1: Introduction to Networks",
    provider: "Cisco Networking Academy",
    topics: ["Networking fundamentals, architectures, protocols and the TCP/IP model", "Ethernet, LANs and WANs", "IPv4 and IPv6 addressing and subnetting", "Router and switch basics with Cisco IOS", "Basic troubleshooting and security fundamentals"],
  },
  {
    title: "CCNA 2: Switching, Routing and Wireless Essentials",
    provider: "Cisco Networking Academy",
    topics: ["Configured VLANs, switch ports and trunk links", "Inter-VLAN routing and network segmentation", "STP, RSTP and EtherChannel", "Configured DHCPv4; studied IPv6 allocation, SLAAC and DHCPv6", "Static and default routing, wireless LAN concepts, switch security and Layer 2 threats"],
  },
];
