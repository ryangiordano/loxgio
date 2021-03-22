import Divider from "Components/Divider";
import { Dropzone, Draggable } from "Components/DragAndDrop";
import { motion } from "framer-motion";
import { Flip } from "Lib/AnimationVariants";
import { CharacterContext } from "Pages/Home/Home";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import { CharacterDetails } from "Pages/Home/Sections/Stats/Stats";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useEffect, useState } from "react";
import { theme } from "Styles/theme";

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
    <motion.div {...Flip}>
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
                        padding: theme.spacing.medium,
                      }}
                      className={"pixel-border pixel-border-list-horizontal"}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          marginRight: theme.spacing.large,
                          height: "100%",
                        }}
                      >
                        <img
                          draggable="false"
                          src={`/images/${character.profilePicture}`}
                          style={{
                            height: "100%",
                          }}
                        />
                      </div>
                      {isActive ? (
                        <div
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            marginLeft: theme.spacing.large,
                          }}
                        >
                          <CharacterDetails character={character} />
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
                            marginTop: theme.spacing.large,
                          }}
                        >
                          <h2
                            style={{
                              whiteSpace: "nowrap",
                              marginRight: theme.spacing.large,
                              fontSize: theme.fontSize.medium,
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
                                  marginLeft:
                                    index === 0 ? null : theme.spacing.large,
                                }}
                                handleDrop={(e) => {
                                  const d = JSON.parse(
                                    e.dataTransfer.getData("application/my-app")
                                  );
                                  setCharacterSkill(
                                    character.id,
                                    d.skill.id,
                                    id
                                  );
                                }}
                                handleDragOver={(e) => {
                                  e.preventDefault();
                                }}
                                handleDragEnter={(e) => {
                                  e.preventDefault();
                                }}
                                handleDragLeave={() => {}}
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
                                        position: "relative",
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
                                        offsetY={20}
                                      />
                                    </div>
                                  );
                                }}
                              </Dropzone>
                            );
                          })}
                          <img
                            draggable="false"
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
                marginTop: theme.spacing.large,
              }}
            >
              <h2
                style={{
                  whiteSpace: "nowrap",
                  marginRight: theme.spacing.giant,
                  fontSize: theme.fontSize.medium,
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
                    style={{
                      margin: theme.spacing.medium,
                      position: "relative",
                    }}
                    draggingImageSrc={s.skill.icon}
                  >
                    <SkillIcon
                      src={s.skill.icon}
                      name={s.skill.name}
                      size={"50px"}
                      offsetY={15}
                    />
                  </Draggable>
                ) : null;
              })}
            </div>
          </MainAreaBase>
        )}
      </CharacterContext.Consumer>
    </motion.div>
  );
};
export default Skills;
