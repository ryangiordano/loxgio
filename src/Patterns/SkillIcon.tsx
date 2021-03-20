import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";
import SkillPopover from "../Components/SkillPopover";
import { theme } from "../Styles/theme";

export const SkillIcon = ({ name, src, size = "70px" }) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [focusing, setFocusing] = useState(false);

  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  return (
    <>
      <button
        type="button"
        ref={referenceElement}
        style={{
          height: size,
          width: size,
          backgroundColor: theme.backgroundColor.white,
          padding: theme.spacing.tiny,
          transition: "all .2s",
          transformOrigin: "center center",
        }}
        className="pixel-border"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setFocusing(true)}
        onBlur={() => setFocusing(false)}
        onPointerDown={() => {
          setFocusing(false);
          setHovering(false);
        }}
      >
        <img
          draggable="false"
          alt={name}
          title={name}
          src={`/images/${src}`}
          style={{
            height: "100%",
          }}
        />
      </button>
      <div
        ref={popperElement}
        style={{
          ...styles.popper,
          zIndex: 1000,
          visibility: hovering || focusing ? "visible" : "hidden",
        }}
        {...attributes.popper}
      >
        <SkillPopover content={name} />
      </div>
    </>
  );
};
