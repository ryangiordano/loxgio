import Skills from "../Data/Skills.json";
import Characters from "../Data/Characters.json";

export default class CharacterService {
  constructor() {}

  getCharacter(id: number): Character {
    const characterToReturn = Characters[id];
    if (!characterToReturn) {
      throw new Error(`Character at ${id} does not exist`);
    }
    return {
      id,
      ...characterToReturn,
      skills: [...characterToReturn.skills.map((s) => this.getSkill(s.id))],
    };
  }
  getSkill(id): Skill {
    const skillToReturn = Skills[id];
    if (!skillToReturn) {
      throw new Error(`Skill at ${id} does not exist`);
    }
    return {
      id,
      ...skillToReturn,
    };
  }
  getAllCharacters(): Character[] {
    const characters = Object.keys(Characters).map((k) =>
      this.getCharacter(Characters[k].id)
    );
    return characters;
  }
}
