import React, { useEffect } from "react";
import MainAreaBase from "./MainAreaBase";

const Skills = ({ setInfoText }) => {
  useEffect(() => {
    setInfoText("Skills");
  }, []);
  return <MainAreaBase>Skills</MainAreaBase>;
};
export default Skills;
