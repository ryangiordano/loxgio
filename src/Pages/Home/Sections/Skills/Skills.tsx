import React, { useEffect, useState } from "react";
import MainAreaBase from "../MainAreaBase";
import { Draggable, Dropzone } from "../../../../Components/DragAndDrop";

const Skills = ({
  setInfoText,
  characters,
}: {
  setInfoText: (text: string) => void;
  characters: Character[];
}) => {
  useEffect(() => {
    setInfoText("Drag and drop to equip skills and see what we can do!");
  }, []);

  const [selectedCharacterId, setSelectedCharacterId] = useState(
    characters[0].id
  );
  const selectedCharacter = characters.find(
    (c) => selectedCharacterId === c.id
  );
  return (
    <MainAreaBase>
      <div style={{ display: "flex" }}>
        {characters.map((character) => {
          const isActive = selectedCharacterId === character.id;
          return (
            <div key={character.id}>
              <button
                key={character.name}
                onClick={() => {
                  setSelectedCharacterId(character.id);
                }}
                style={{
                  backgroundColor: isActive ? "red" : "blue",
                }}
              >
                {character.name}
              </button>
              {isActive ? (
                <div style={{ display: "flex" }}>
                  {character?.defaultEquippedSkills.map((id, index) => {
                    return (
                      <Dropzone
                        key={id}
                        style={{
                          marginLeft: index === 0 ? null : "1rem",
                          padding: "1rem",
                          border: "1px solid white",
                        }}
                        handleDrop={(e) => {
                          const d = JSON.parse(
                            e.dataTransfer.getData("application/my-app")
                          );
                        }}
                        handleDragOver={(e) => {
                          e.preventDefault();
                          console.log("Draggin");
                        }}
                        handleDragEnter={(e) => {
                          e.preventDefault();
                          console.log("Enter");
                        }}
                        handleDragLeave={() => {
                          console.log("Leave");
                        }}
                      >
                        {
                          character?.skills?.find((s) => s.skill.id === id)
                            ?.skill.name
                        }
                      </Dropzone>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div>
        {selectedCharacter?.skills?.map((s) => {
          return !Boolean(
            selectedCharacter.defaultEquippedSkills.find(
              (ds) => s.skill.id === ds
            )
          ) ? (
            <Draggable key={s.skill.id} data={s}>
              <>{s.skill.name}s</>
            </Draggable>
          ) : null;
        })}
      </div>
    </MainAreaBase>
  );
};
export default Skills;
