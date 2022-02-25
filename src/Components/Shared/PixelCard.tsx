import React from "react";

export const PixelCard = ({
  children,
  header = <></>,
  style = {},
  className,
  ...rest
}) => {
  return (
    <div
      className={`pixel-panel mb-3 box-shadow-thin ${className}`}
      style={{ ...style }}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body xs-padding-thin">{children}</div>
    </div>
  );
};
