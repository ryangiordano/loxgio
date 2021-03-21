import { ModalConsumer, ModalLayout } from "Components/Modal";
import MainAreaBase from "Pages/Home/Sections/MainAreaBase";
import React, { useState } from "react";

const QuestListEntry = ({ title, description, characterPortraits }) => {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ModalConsumer>
        {({ openModal }) => {
          return (
            <button
              type="button"
              style={{
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
              <li
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  hovering || focused ? "pixel-border" : "borderless"
                }`}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderWidth: "3px     ",
                }}
              >
                &#x3e; {title}{" "}
              </li>
            </button>
          );
        }}
      </ModalConsumer>

      {/* <Modal
        isOpen={modalOpen}
        // onAfterOpen={() => {
        //   //todo
        // }}
        onRequestClose={() => setModalOpen(false)}
        style={{
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        contentLabel="Example Modal"
      ></Modal> */}
    </>
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
      <MainAreaBase>
        <ul className="list-group">
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
        </ul>
      </MainAreaBase>
    );
  }
}
