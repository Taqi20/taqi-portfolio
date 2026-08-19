export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  caption: string;
  skills: Skill[];
}

