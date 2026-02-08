export const courses = [
  {
    id: 1,
    title: "Basics of Odoo CRM",
    description:
      "Manage customers, track leads, automate pipelines, and improve conversion rates.",
    category: "CRM",
    level: "Beginner",
    skills: ["CRM", "Pipeline Automation", "Lead Management"],
    status: "In Progress",
    access: "Purchased",
    duration: "2-5 hours",
    createdAt: "2025-11-12",
    rating: 4.7,
    price: 0,
    progress: 75
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description:
      "SEO, paid ads, analytics, and conversion optimization strategies.",
    category: "Marketing",
    level: "Intermediate",
    skills: ["SEO", "Paid Ads", "Conversion Optimization"],
    status: "Not Started",
    access: "Free",
    duration: "2-5 hours",
    createdAt: "2025-10-05",
    rating: 4.6,
    price: 0,
    progress: 0
  },
  {
    id: 3,
    title: "Enterprise Sales Strategy",
    description:
      "Enterprise sales playbooks, negotiation techniques, and B2B deal management.",
    category: "Sales",
    level: "Advanced",
    skills: ["Negotiation", "B2B Sales", "Account Planning"],
    status: "Not Started",
    access: "Paid",
    duration: "5+ hours",
    createdAt: "2026-01-15",
    rating: 4.9,
    price: 500,
    originalPrice: 1200,
    progress: 0
  },
  {
    id: 4,
    title: "GA4 Analytics Foundations",
    description:
      "GA4 setup, reporting, and interpretation of engagement metrics.",
    category: "Analytics",
    level: "Beginner",
    skills: ["GA4", "Reporting", "Engagement Metrics"],
    status: "Completed",
    access: "Free",
    duration: "1-2 hours",
    createdAt: "2025-08-22",
    rating: 4.5,
    price: 0,
    progress: 100
  }
];

export const variantMap = {
  CRM: "crm",
  Marketing: "marketing",
  Sales: "sales",
  Analytics: "analytics"
};
