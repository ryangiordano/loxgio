import EquippedSkills from "Components/Skills/EquippedSkills";
import SkillsToEquip from "Components/Skills/SkillsToEquip";
import React, { useState } from "react";

export default function SkillEquip({
  selectedCharacter,
}: {
  selectedCharacter: Character | undefined;
}) {
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);

  return (
    <>
      <EquippedSkills
        selectedCharacter={selectedCharacter}
        selectedSkillId={selectedSkillId}
        setSelectedSkillId={setSelectedSkillId}
      />

      <SkillsToEquip
        selectedCharacter={selectedCharacter}
        selectedSkillId={selectedSkillId}
        setSelectedSkillId={setSelectedSkillId}
      />
    </>
  );
}
