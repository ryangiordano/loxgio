declare type SocialMediaLink = {
  icon: string;
  url: string;
  description: string;
};

declare enum SkillType {
  data = "data",
  frontend = "frontend",
  backend = "backend",
  parenting = "parenting",
  productivity = "productivity",
}

declare type Skill = {
  id: number;
  icon: string;
  type: SkillType;
  name: string;
};

declare type CharacterSkill = {
  level: number;
  skill: Skill;
};

type Character = {
  id: number;
  name: string;
  links: SocialMediaLink[];
  profilePicture: string;
  email: string;
  phoneNumber: string;
  level: number;
  jobTitle: string;
  skills: CharacterSkill[];
  defaultEquippedSkills: number[];
  sprite: string;
};
