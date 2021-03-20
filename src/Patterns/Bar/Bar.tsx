import React, { useState, useEffect } from "react";
import { theme } from "Styles/theme";
import styles from "Patterns/Bar/Bar.module.scss";

export default function Bar({ color }: { color: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        borderRadius:"3px",
        border: `3px solid ${theme.backgroundColor.brightWhite}`,
      }}
    >
      <div
        style={{
          width: loaded ? "100%" : undefined,
          backgroundColor: color,
        }}
        className={`${styles.bar}`}
      ></div>
    </div>
  );
}
