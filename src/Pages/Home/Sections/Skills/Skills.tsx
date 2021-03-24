import CharacterSelector from "Components/CharacterSelector";
import Divider from "Components/Divider";
import { Dropzone, Draggable } from "Components/DragAndDrop";
import { motion } from "framer-motion";
import { Flip } from "Lib/AnimationVariants";
import { CharacterContext } from "Pages/Home/Home";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
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
              <CharacterSelector
                characters={characters}
                selectedCharacterId={selectedCharacterId}
                onCharacterSelect={(id) => {
                  setSelectedCharacterId(id);
                }}
              />

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
                                      <div style={{ position: "absolute" }}>
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
            <div style={{}}>
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
                      display: "inline-block",
                    }}
                    draggingImageSrc={s.skill.icon}
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
    </motion.div>
  );
};
export default Skills;
