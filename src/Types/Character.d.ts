declare type SocialMediaLink = {
  iconUrl: string;
  url: string;
  description: string;
};

declare type Skill = {
  iconUrl: string;
  description: string;
  name: string;
};

type Character = {
  name: string;
  links: SocialMediaLink[];
  email: string;
  phoneNumber: string;
  level: number;
  jobTitle: string;
  skills: Skill[];
};
