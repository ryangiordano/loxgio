import Divider from "Components/Divider";
import { SkillIcon } from "Patterns/SkillIcon";
import React, { useContext } from "react";
import { CharacterContext } from "State/CharacterContext";
import { theme } from "Styles/theme";

export default function SkillsToEquip({
  selectedCharacter,
  selectedSkillId,
  setSelectedSkillId,
}) {
  const { setCharacterSkill } = useContext(CharacterContext);

  return (
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
          const skillIconActive =
            selectedSkillId != null && selectedSkillId !== s.skill.id;
          return !Boolean(
            selectedCharacter.defaultEquippedSkills.find(
              (ds) => s.skill.id === ds
            )
          ) ? (
            <div
              key={s.skill.id}
              style={{
                margin: theme.spacing.medium,
                position: "relative",
                display: "inline-block",
                boxShadow: skillIconActive
                  ? " 0px 0px 47px -10px rgba(255,255,255,0.75)"
                  : "",
                transition: "all .5s ease",
                opacity: selectedSkillId != null && !skillIconActive ? 0.7 : 1,
              }}
            >
              <SkillIcon
                src={s.skill.icon}
                name={s.skill.name}
                size={"50px"}
                onClick={() => {
                  if (selectedSkillId != null) {
                    setCharacterSkill(
                      selectedCharacter.id,
                      selectedSkillId,
                      s.skill.id
                    );
                    setSelectedSkillId(null);
                  } else {
                    setSelectedSkillId(s.skill.id);
                  }
                }}
              />
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
