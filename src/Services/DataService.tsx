import Skills from "../Data/Skills.json";
import Characters from "../Data/Characters.json";
import Quests from "../Data/Quests.json";

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
      skills: [
        ...characterToReturn.skills.map((s) => ({
          level: s.level,
          skill: this.getSkill(s.id),
        })),
      ],
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

  getQuest(id: number): Quest {
    const questToReturn = Quests[id];
    if (!questToReturn) {
      throw new Error(`Quest at ${id} does not exist`);
    }
    return {
      id,
      ...questToReturn,
      skills: [
        ...questToReturn.skills.map((s) => ({
          level: s.level,
          skill: this.getSkill(s),
        })),
      ],
    };
  }

  getAllQuests(): Quest[] {
    const quests = Object.keys(Quests).map((k) => {
      return {
        ...this.getQuest(Quests[k].id),
      };
    });
    return quests;
  }

  getAllQuestsForCharacter(characterId: number): Character[] {
    const quests = Object.keys(Quests).map((k) => {

    });
    const characters = Object.keys(Characters).map((k) =>
      this.getCharacter(Characters[k].id)
    );
    return characters;
  }
}
