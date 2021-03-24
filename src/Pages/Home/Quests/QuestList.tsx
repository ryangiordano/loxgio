import { ModalConsumer, ModalLayout } from "Components/Modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { theme } from "Styles/theme";

export default function QuestList({ title, description, characterPortraits }) {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <ModalConsumer>
      {({ openModal }) => {
        return (
          <motion.li
            className={`list-group-item d-flex justify-content-between align-items-center ${
              hovering || focused ? "pixel-border" : "borderless"
            }`}
            style={{
              backgroundColor: "transparent",
              borderWidth: "3px",
            }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 },
            }}
          >
            <button
              type="button"
              style={{
                color: theme.backgroundColor.white,
                border: "none",
                backgroundColor: "transparent",
              }}
              onClick={() => {
                openModal(
                  <ModalLayout
                    header={<>{title}</>}
                    style={{
                      width: "75vw",
                    }}
                  >
                    <p>{description}</p>
                  </ModalLayout>
                );
              }}
              onMouseEnter={() => setHovering(true)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onMouseLeave={() => setHovering(false)}
            >
              &#x3e; {title}{" "}
              <span>
                {characterPortraits.map((c) => (
                  <img
                    height="25px"
                    style={{ marginRight: theme.spacing.tiny }}
                    src={`/images/${c}`}
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
