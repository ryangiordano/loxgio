import React, { useState } from "react";

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
      draggable="false"
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
  draggingImageSrc,
  ...restProps
}: {
  children: JSX.Element;
  data: any;
  [x: string]: any;
  draggingImageSrc: string;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { style, ...rest } = restProps;

  return (
    <>
      <div
        style={{
          transition: "all .3s ease-in-out",
          opacity: isDragging ? 0 : 1,
          ...style,
        }}
        draggable
        onDragStart={(e) => {

          const i = document.createElement("img");
          const width = 50;
          const height = 50;
          document.body.append(i);
          i.src = `/images/${draggingImageSrc}`;
          i.height = height;
          i.width = width;
          i.style.backgroundColor = "white"
          i.style.borderRadius = "15px";
          i.style.margin = "1rem";

         //todo We need to find a way to reliably attach and remove elements from the dom
         // while dragging so that we can change the
         // drag image on the cursor.
          // e.dataTransfer.setDragImage(i, -10, -10)
          e.dataTransfer.setData("application/my-app", JSON.stringify(data));
        }}
        onDrag={(e) => {
          setIsDragging(true);
        }}
        onDrop={() => {
        }}
        onDragEnd={() => {
          setIsDragging(false);
        }}
        {...rest}
      >
        {children}
      </div>
    </>

  );
};
