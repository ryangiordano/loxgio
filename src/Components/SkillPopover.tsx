import React from "react"

const SkillPopover = ({ content }) => {
    return <div
        className="pixel-panel"
        style={{
            padding: "1rem",
        }}>
        <span>{content}</span>
    </div>
}

export default SkillPopover