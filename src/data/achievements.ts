import { Achievement } from "@/types/portfolio";
import { findCompanyByAlias } from "@/utils/portfolio";

export const Achievements: Achievement[] = [
  {
    name: "Technocrat of the year",
    type: "award",
    year: 2021,
    achievedAt: findCompanyByAlias("lw"),
  },
  {
    name: "Team of the year",
    type: "award",
    year: 2023,
    achievedAt: findCompanyByAlias("lw"),
  },
  {
    name: "Agile Scrum Master Completion Certification",
    type: "certification",
    year: 2024,
    achievedFrom: "Simplilearn",
  },
  {
    name: "Employee of the year",
    type: "award",
    year: 2025,
    achievedAt: findCompanyByAlias("lw"),
  },
];