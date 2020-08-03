import React, { useEffect, useState } from "react";
import MainAreaBase from "./MainAreaBase";

const Skills = ({ setInfoText, characters }) => {
  useEffect(() => {
    setInfoText("Skills");
  }, []);

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0].id);
  return (
    <MainAreaBase>
      <div>
        {characters.map((c) => {
          return <button key={c.name}>{c.name}</button>;
        })}
      </div>
    </MainAreaBase>
  );
};
export default Skills;
