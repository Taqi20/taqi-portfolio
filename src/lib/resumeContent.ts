import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import type { Experience } from "@/types/experience";
import type { SkillCategory } from "@/types/skill";

export const RESUME_MAX_ACHIEVEMENTS = 6;
export const RESUME_MAX_STACK = 12;
export const RESUME_MAX_SKILLS_PER_CATEGORY = 6;

export function resumeExperience(): Experience[] {
  return experience.map((role) => ({
    ...role,
    achievements: role.achievements.slice(0, RESUME_MAX_ACHIEVEMENTS),
    stack: role.stack.slice(0, RESUME_MAX_STACK),
  }));
}

export function resumeSkills(): SkillCategory[] {
  return skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.slice(0, RESUME_MAX_SKILLS_PER_CATEGORY),
  }));
}

