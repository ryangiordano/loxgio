type LinkObj = {
  url: string;
  text: string;
};

type MediaObj = {
  alt: string;
  src: string;
};

type Quest = {
  id: number;
  title: string;
  links: LinkObj[];
  skills: CharacterSkill[];
  media: MediaObj;
  characters: Character[];
  description: string;
};
