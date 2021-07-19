import { ModalConsumer, ModalLayout } from "Components/Modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { theme } from "Styles/theme";
import WriteIn from "../../../Components/WriteIn";
import { isMobile } from "react-device-detect";

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
                textAlign: "left",
              }}
              onClick={() => {
                openModal(
                  <ModalLayout
                    header={<>{title}</>}
                    style={{
                      width: isMobile ? null : "75vw",
                    }}
                  >
                    <p
                      className="long-form"
                      style={isMobile ? { fontSize: theme.fontSize.small } : {}}
                    >
                      <WriteIn
                        text={description}
                        speedInMilliseconds={5}
                      ></WriteIn>
                    </p>
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
                    key={c}
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
