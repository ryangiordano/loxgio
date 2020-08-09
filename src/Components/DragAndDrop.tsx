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
  const [isBeingHoveredOver, setIsBeingHoveredOver] = useState(false);
  return (
    <div
      style={{
        padding: isBeingHoveredOver ? "1rem" : 0,
        transition: "all .3s",
      }}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => {
        e.preventDefault();
        setIsBeingHoveredOver(true);

        handleDragOver(e);
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsBeingHoveredOver(true);
        handleDragEnter(e);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsBeingHoveredOver(false);
        handleDragLeave(e);
      }}
      {...restProps}
    >
      {children({ isBeingHoveredOver })}
    </div>
  );
};

export const Draggable = ({
  children,
  data,
  ...restProps
}: {
  children: JSX.Element;
  data: any;
  [x: string]: any;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  console.log(isDragging);
  const { style, ...rest } = restProps;
  return (
    <div
      style={{
        transition: "all .3s ease-in-out",
        opacity: isDragging ? 0 : 1,
        ...style,
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
      {...rest}
    >
      {children}
    </div>
  );
};
