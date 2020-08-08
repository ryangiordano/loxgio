import React, { useState, ReactChildren } from "react";

export const Dropzone = ({
  handleDrop,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  children,
  ...restProps
}: {
  [x: string]: any;
}) => {
  return (
    <div
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export const Draggable = ({
  children,
  data,
}: {
  children: JSX.Element;
  data: any;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div
      style={{
        transition: "all .5s ease-in-out",
        opacity: isDragging ? 0 : 1,
      }}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("application/my-app", JSON.stringify(data));
      }}
      onDrag={(e) => {
        setIsDragging(true);
      }}
      onDrop={() => {}}
      onDragEnd={() => {
        setIsDragging(false);
      }}
    >
      {children}
    </div>
  );
};
