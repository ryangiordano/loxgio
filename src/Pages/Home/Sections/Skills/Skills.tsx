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
          <div>
            <div style={{ display: "flex", width: "100%" }}>
              {characters.map((character) => {
                const isActive = selectedCharacterId === character.id;
                return (<button
                  key={character.name}
                  onClick={() => {
                    setSelectedCharacterId(character.id);
                  }}
                  style={{
                    border: "2px solid white",
                    minHeight: "150px",
                    backgroundColor: "#fff",
                    width: isActive ? "100%" : "100px",
                    opacity: isActive ? "1" : ".75",
                    textAlign: "left",
                    transition: "all .3s",
                    display: "flex",
                    padding: ".5rem"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <img src={`/images/${character.profilePicture}`} width={"100%"} />
                  </div>
                  {isActive ? <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                    <h1 className="title" style={{ fontSize: "1rem", fontWeight: "bold" }}>{character.name}</h1>
                    <p>Level {character.level}</p>
                    <p>{character.jobTitle}</p>
                  </div> : null}
                </button>
                )
              })}
            </div>

            {characters.map((character) => {
              const isActive = selectedCharacterId === character.id;
              return (
                <div key={character.id}>
                  {isActive ? (
                    <>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                        <h2 style={{ whiteSpace: "nowrap", marginRight: "10px" }}>Equipped</h2>
                        <div style={{ width: "100%", height: "1px", borderTop: "1px solid white" }}></div>
                      </div>
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
                        <img height={"75px"} style={{ marginLeft: "auto" }} src={`/images/${character.sprite}`} />
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
            <h2 style={{ whiteSpace: "nowrap", marginRight: "10px" }}>Skills</h2>
            <div style={{ width: "100%", height: "1px", borderTop: "1px solid white" }}></div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selectedCharacter?.skills?.map((s) => {
              return !Boolean(
                selectedCharacter.defaultEquippedSkills.find(
                  (ds) => s.skill.id === ds
                )
              ) ? (
                  <Draggable key={s.skill.id} data={s} style={{ margin: ".5rem" }}>
                    <SkillIcon src={s.skill.icon} name={s.skill.name} size={"50px"} />
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
