import React, { useEffect } from "react";
import MainAreaBase from "./MainAreaBase";

const QuestLog = ({ setInfoText }) => {
  useEffect(() => {
    setInfoText("Quest Log");
  }, []);
  return <MainAreaBase>

  </MainAreaBase>;
};
export default QuestLog;
