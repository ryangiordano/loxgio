import CharacterSelector from "Components/Shared/CharacterSelector";
import { motion } from "framer-motion";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import React, { useState, useEffect, useCallback } from "react";
import QuestList from "./QuestList";

export default function Quests({
  setInfoText,
  characters,
  quests,
}: {
  setInfoText: (infoText: string) => void;
  characters: Character[];
  quests: Quest[];
}) {
  useEffect(() => {
    setInfoText("View various quests we've completed.");
  }, [setInfoText]);

  const [selectedCharacterId, setSelectedCharacterId] = useState(
    characters[0].id
  );

  const onCharacterSelect = useCallback(
    (characterId) => setSelectedCharacterId(characterId),
    [setSelectedCharacterId]
  );

  return (
    <>
      <MainAreaBase>
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="list-group"
        >
          <CharacterSelector
            characters={characters}
            onCharacterSelect={onCharacterSelect}
            selectedCharacterId={selectedCharacterId}
          />
          <br />
          {quests
            .filter((q) => q.characters.includes(selectedCharacterId))
            .map((q) => {
              return (
                <QuestList
                  key={q.id}
                  title={q.title}
                  description={q.description}
                  characters={q.characters.map((id) =>
                    characters.find((c) => c.id === id)
                  )}
                />
              );
            })}
        </motion.ul>
      </MainAreaBase>
    </>
  );
}
