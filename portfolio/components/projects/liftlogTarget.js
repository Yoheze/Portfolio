
// DropZone.js
import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ id, onDrop, className, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => onDrop(id, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const dropClassName = isOver ? "drop-target is-over" : "drop-target";

  return (
    <div ref={drop} className={`${dropClassName} ${className}`} onClick={()=>{
      }}>
      {children}
    </div>
  );
};

export default DropZone;