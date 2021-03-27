import React, { useContext, createContext, useState } from "react";
import DataService from "Services/DataService";
import { useLocation } from "react-router-dom";

export const CharacterContext = createContext<{
  characters: Character[];
  setCharacterSkill: (
    characterId: number,
    skillIdToEquip: number,
    skillIdToRemove: number
  ) => void;
}>({
  characters: [],
  setCharacterSkill: (
    characterId: number,
    skillIdToEquip: number,
    skillIdToRemove: number
  ) => {},
});

export const CharacterState = ({
  children,
}: {
  children: ({ characters }) => React.ReactNode;
}) => {
  const dataService = new DataService();
  const [characters, setCharacters] = useState(dataService.getAllCharacters());

  const handleSetSkill = (
    characterId: number,
    firstSelectedSkillId: number,
    secondSelectedSkillId: number
  ) => {
    const c = characters.find((cr) => characterId === cr.id);
    if (!c) {
      throw new Error(`Cannot access character at id ${characters}`);
    }

    const equipped = c.defaultEquippedSkills;
    const reserveSkills: number[] = c.skills.reduce<number[]>((acc, s) => {
      if (!equipped.includes(s.skill.id)) {
        acc.push(s.skill.id);
      }
      return acc;
    }, []);
    if (firstSelectedSkillId === secondSelectedSkillId) {
      return;
    }

    const start = equipped.includes(firstSelectedSkillId)
      ? equipped
      : reserveSkills;
    const dest = equipped.includes(secondSelectedSkillId)
      ? equipped
      : reserveSkills;

    const a = start[start.indexOf(firstSelectedSkillId)];
    start[start.indexOf(firstSelectedSkillId)] =
      dest[dest.indexOf(secondSelectedSkillId)];
    dest[dest.indexOf(secondSelectedSkillId)] = a;
    return setCharacters([...characters]);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacterSkill: (
          characterId: number,
          firstSelectedSkillId: number,
          secondSelectedSkillId: number
        ) =>
          handleSetSkill(
            characterId,
            firstSelectedSkillId,
            secondSelectedSkillId
          ),
      }}
    >
      {children({ characters })}
    </CharacterContext.Provider>
  );
};
