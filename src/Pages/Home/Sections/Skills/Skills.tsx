import React, { useEffect, useState } from "react";
import MainAreaBase from "../MainAreaBase";
import { Draggable, Dropzone } from "../../../../Components/DragAndDrop";
import { CharacterStateContext } from "../../../../State/CharacterState";
import { CharacterContext } from "../../Home";
import Divider from "../../../../Components/Divider";

export const SkillIcon = ({ name, src, size = "70px" }) => {
  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "3px",
        transition: "all .2s",
        transformOrigin: "center center",
      }}
    >
      <img
        draggable="false"
        alt={name}
        title={name}
        src={`/images/${src}`}
        style={{
          height: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

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
                return (
                  <button
                    key={character.name}
                    onClick={() => {
                      setSelectedCharacterId(character.id);
                    }}
                    style={{
                      minHeight: "150px",
                      backgroundColor: "rgba(0,0,0,0)",
                      width: isActive ? "100%" : "100px",
                      opacity: isActive ? "1" : ".75",
                      textAlign: "left",
                      transition: "all .3s",
                      display: "flex",
                      padding: ".5rem",
                    }}
                    className={"pixel-border-list-horizontal"}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        src={`/images/${character.profilePicture}`}
                      />
                    </div>
                    {isActive ? (
                      <div style={{ overflow: "hidden", whiteSpace: "nowrap", marginLeft: "1rem" }}>
                        <h1
                          className="title"
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          {character.name}
                        </h1>
                        <p>Level {character.level}</p>
                        <p>{character.jobTitle}</p>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {characters.map((character) => {
              const isActive = selectedCharacterId === character.id;
              return (
                <div key={character.id}>
                  {isActive ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "1rem",
                        }}
                      >
                        <h2
                          style={{
                            whiteSpace: "nowrap",
                            marginRight: "10px",
                            fontSize: "1.25rem",
                          }}
                        >
                          Equipped
                        </h2>
                        <Divider />

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
                                setCharacterSkill(character.id, d.skill.id, id);
                              }}
                              handleDragOver={(e) => {
                                e.preventDefault();
                              }}
                              handleDragEnter={(e) => {
                                e.preventDefault();
                              }}
                              handleDragLeave={() => { }}
                            >
                              {({ isBeingHoveredOver }) => {
                                return (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      height: "70px",
                                      width: "70px",
                                    }}
                                  >
                                    <SkillIcon
                                      src={
                                        character.skills.find(
                                          (s) => s.skill.id === id
                                        )?.skill.icon
                                      }
                                      name={
                                        character?.skills?.find(
                                          (s) => s.skill.id === id
                                        )?.skill.name
                                      }
                                      size={
                                        isBeingHoveredOver ? "60px" : "70px"
                                      }
                                    />
                                  </div>
                                );
                              }}
                            </Dropzone>
                          );
                        })}
                        <img
                          height={"75px"}
                          style={{ marginLeft: "auto" }}
                          src={`/images/${character.sprite}`}
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <h2
              style={{
                whiteSpace: "nowrap",
                marginRight: "10px",
                fontSize: "1.25rem",
              }}
            >
              Skills
            </h2>
            <Divider />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selectedCharacter?.skills?.map((s) => {
              return !Boolean(
                selectedCharacter.defaultEquippedSkills.find(
                  (ds) => s.skill.id === ds
                )
              ) ? (
                  <Draggable
                    key={s.skill.id}
                    data={s}
                    style={{ margin: ".5rem" }}
                  >
                    <SkillIcon
                      src={s.skill.icon}
                      name={s.skill.name}
                      size={"50px"}
                    />
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
