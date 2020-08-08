import React, { useEffect, useState } from "react";
import MainAreaBase from "../MainAreaBase";
import { Draggable, Dropzone } from "../../../../Components/DragAndDrop";
import { CharacterStateContext } from "../../../../State/CharacterState";
import { CharacterContext } from "../../Home";


const SkillIcon = (
  { name, src, size = "70px" }
) => {
  return (<div style={{
    height: size,
    width: size,
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "3px",

  }}><img alt={name} title={name} src={`/images/${src}`} style={{
    height: "100%",
    borderRadius: "10px",
  }} /></div>)
}

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
    <CharacterContext.Consumer>
      {({ setCharacterSkill }) => (
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
                            }}
                            handleDrop={(e) => {
                              const d = JSON.parse(
                                e.dataTransfer.getData("application/my-app")
                              );
                              setCharacterSkill(character.id, d.skill.id, id)
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
                            <SkillIcon src={character.skills.find(s => s.skill.id === id)?.skill.icon} name={character?.skills?.find((s) => s.skill.id === id)
                              ?.skill.name} />
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


      )}
    </CharacterContext.Consumer>

  );
};
export default Skills;
