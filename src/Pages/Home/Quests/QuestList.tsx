import { ModalConsumer, ModalLayout } from "Components/Shared/Modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { theme } from "Styles/theme";
import { isMobile } from "react-device-detect";
import QuestModal from "Components/Quests/QuestModal";
import { SkillIcon } from "Patterns/SkillIcon";

export default function QuestList({
  quest,
  characters,
}: {
  quest: Quest;
  characters: Character[];
}) {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);

  const hidden = isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: -30 };
  const show = isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <ModalConsumer>
      {({ openModal }) => {
        return (
          <motion.li
            className={`list-group-item d-flex justify-content-between align-items-center ${
              hovering || focused ? "pixel-border" : "borderless"
            }`}
            style={{
              backgroundColor: theme.backgroundColor.green,
              borderRadius: "5px",
              borderWidth: "3px",
              paddingLeft: 0,
              paddingTop: theme.spacing.tiny,
              paddingRight: 0,
              paddingBottom: theme.spacing.tiny,
              marginTop: theme.spacing.small,
            }}
            variants={{
              hidden,
              show,
            }}
          >
            <button
              type="button"
              style={{
                color: theme.backgroundColor.white,
                border: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
              onClick={() => {
                openModal(<QuestModal quest={quest} />);
              }}
              onMouseEnter={() => setHovering(true)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onMouseLeave={() => setHovering(false)}
            >
              &#x3e; {quest.title}{" "}
              <span>
                {characters.map((c) => (
                  <img
                    alt={c.name}
                    key={c.profilePicture}
                    height="25px"
                    style={{ marginRight: theme.spacing.tiny }}
                    src={`/images/${c.profilePicture}`}
                  />
                ))}
              </span>
            </button>
          </motion.li>
        );
      }}
    </ModalConsumer>
  );
}
