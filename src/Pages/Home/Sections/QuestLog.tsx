import { ModalConsumer, ModalLayout } from "Components/Modal";
import { motion } from "framer-motion";
import { Flip } from "Lib/AnimationVariants";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import React, { useState } from "react";
import { theme } from "Styles/theme";

const QuestListEntry = ({ title, description, characterPortraits }) => {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
              borderWidth: "3px     ",
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
            </button>
          </motion.li>
        );
      }}
    </ModalConsumer>
  );
};
export default class QuestLog extends React.Component<{
  setInfoText: (infoText: string) => void;
  quests: Quest[];
}> {
  componentDidMount() {
    this.props.setInfoText("View various quests we've completed.");
  }

  render() {
    return (
      <>
        <MainAreaBase>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="list-group"
          >
            {this.props.quests.map((q) => {
              return (
                <QuestListEntry
                  key={q.id}
                  title={q.title}
                  description={q.description}
                  characterPortraits={q.characters.map((c) => c.profilePicture)}
                />
              );
            })}
          </motion.ul>
        </MainAreaBase>
      </>
    );
  }
}
