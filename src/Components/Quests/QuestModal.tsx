import { ModalLayout } from "Components/Shared/Modal";
import WriteIn from "Components/Shared/WriteIn";
import { SkillIcon } from "Patterns/SkillIcon";
import React from "react";
import { isMobile } from "react-device-detect";
import { theme } from "Styles/theme";

function QuestModal({ quest }: { quest: Quest }) {
  return (
    <ModalLayout
      header={<>{quest.title}</>}
      style={{
        width: isMobile ? null : "75vw",
        minHeight: isMobile ? "80vh" : "400px",
      }}
      footer={quest.skills.map((s) => (
        <div
          key={s.skill.name}
          style={{ marginRight: theme.spacing.small, display: "inline-block" }}
        >
          <SkillIcon
            aria-label={s.skill.name}
            src={s.skill.icon}
            size="35px"
            name={s.skill.name}
          />
        </div>
      ))}
    >
      <p
        className="long-form"
        style={isMobile ? { fontSize: theme.fontSize.small } : {}}
      >
        <WriteIn text={quest.description} speedInMilliseconds={5}></WriteIn>
      </p>
    </ModalLayout>
  );
}
export default QuestModal;
