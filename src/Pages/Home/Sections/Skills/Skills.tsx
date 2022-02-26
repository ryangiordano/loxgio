import CharacterSelector from "Components/Shared/CharacterSelector";
import SkillEquip from "Components/Skills/SkillEquip";
import { motion } from "framer-motion";
import { Flip } from "Lib/AnimationVariants";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import React, { useCallback, useEffect, useState } from "react";

const Skills = ({
  setInfoText,
  characters,
}: {
  setInfoText: (text: string) => void;
  characters: Character[];
}) => {
  useEffect(() => {
    setInfoText("Swap around our equipped skills and see what we can do!");
  }, [setInfoText]);

  const [selectedCharacterId, setSelectedCharacterId] = useState(
    characters[0].id
  );
  const selectedCharacter = characters.find(
    (c) => selectedCharacterId === c.id
  );

  const onCharacterSelect = useCallback(
    (id) => {
      setSelectedCharacterId(id);
    },
    [setSelectedCharacterId]
  );
  return (
    <motion.div {...Flip}>
      <MainAreaBase>
        <div>
          <CharacterSelector
            characters={characters}
            selectedCharacterId={selectedCharacterId}
            onCharacterSelect={onCharacterSelect}
          />

          <SkillEquip selectedCharacter={selectedCharacter} />
        </div>
      </MainAreaBase>
    </motion.div>
  );
};
export default Skills;
