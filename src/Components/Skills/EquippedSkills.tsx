import { SkillIcon } from "Patterns/SkillIcon";
import React, { useContext } from "react";
import { CharacterContext } from "State/CharacterContext";
import { theme } from "Styles/theme";
import { isMobile } from "react-device-detect";
import Divider from "Components/Shared/Divider";

export default function EquippedSkills({
  selectedCharacter,
  selectedSkillId,
  setSelectedSkillId,
}) {
  const { setCharacterSkill } = useContext(CharacterContext);
  return (
    <div key={selectedCharacter.id}>
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
        {selectedCharacter?.defaultEquippedSkills.map((id) => {
          const skillIconActive =
            selectedSkillId != null && selectedSkillId !== id;
          return (
            <div
              key={id}
              style={{
                display: "inline-block",
                position: "relative",
                margin: theme.spacing.medium,
                boxShadow: skillIconActive
                  ? " 0px 0px 47px -10px rgba(255,255,255,0.75)"
                  : "",
                transition: "all .5s ease",
                opacity: selectedSkillId != null && !skillIconActive ? 0.7 : 1,
              }}
            >
              <SkillIcon
                src={
                  selectedCharacter.skills.find((s) => s.skill.id === id)?.skill
                    .icon
                }
                name={
                  selectedCharacter?.skills?.find((s) => s.skill.id === id)
                    ?.skill.name
                }
                onClick={() => {
                  if (selectedSkillId != null) {
                    setCharacterSkill(
                      selectedCharacter.id,
                      selectedSkillId,
                      id
                    );
                    setSelectedSkillId(null);
                  } else {
                    setSelectedSkillId(id);
                  }
                }}
                size={isMobile ? "55px" : undefined}
              />
            </div>
          );
        })}
        <img
          alt={selectedCharacter.name}
          draggable="false"
          height={"75px"}
          style={{ marginLeft: "auto" }}
          src={`/images/${selectedCharacter.sprite}`}
        />
      </div>
    </div>
  );
}
