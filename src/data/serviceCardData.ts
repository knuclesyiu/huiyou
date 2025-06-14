import {
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";

export const serviceCardsData = [
  {
    id: 1,
    icon: FaFileAlt, // Pass the component reference, not JSX
    text: "Company Formation",
    subtext:
      "We handle the entire process of company incorporation, ensuring all legal requirements are met and documentation is properly filed.",
    strengths: [
      "Name availability check",
      "Articles of association",
      "Registration with authorities",
    ],
  },
  {
    id: 2,
    icon: FaCalendarAlt,
    text: "Statutory Compliance",
    subtext:
      "We ensure your company meets all ongoing statutory requirements, keeping you compliant with regulatory changes.",
    strengths: [
      "Annual returns filing",
      "Maintenance of statutory registers",
      "Regulatory updates and alerts",
    ],
  },
  {
    id: 3,
    icon: FaUsers,
    text: "Board Support",
    subtext:
      "We provide comprehensive support for board meetings, ensuring proper documentation and governance procedures.",
    strengths: [
      "Meeting preparation and minutes",
      "Director appointments/resignations",
      "Corporate governance advice",
    ],
  },
  {
    id: 4,
    icon: FaDollarSign,
    text: "Share Management",
    subtext:
      "We handle all aspects of share capital management, ensuring accurate records and compliance with regulations.",
    strengths: [
      "Share transfers and certificates",
      "Dividend processing",
      "Shareholder communications",
    ],
  },
  {
    id: 5,
    icon: FaShieldAlt,
    text: "Corporate Governance",
    subtext:
      "We provide expert guidance on corporate governance best practices to enhance your company's reputation and compliance.",
    strengths: [
      "Governance framework development",
      "Policy implementation",
      "Risk management advisory",
    ],
  },
  {
    id: 6,
    icon: FaEnvelope,
    text: "Registered Office Address",
    subtext:
      "We provide a prestigious registered office address for your company, handling all official correspondence and documentation.",
    strengths: [
      "Mail forwarding service",
      "Document receipt and processing",
      "Official correspondence handling",
    ],
  },
];
