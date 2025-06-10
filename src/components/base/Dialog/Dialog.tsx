import React from "react";
import "./Dialog.scss";

interface DialogProps {
  visible: boolean;
  onClose?: any;
  children: React.ReactChild | React.ReactChild[];
}

const Dialog = ({ visible, onClose, children }: DialogProps) => {
  const onClick = (e: any) => {
    if (e.target.id === "dialog") {
      onClose();
    }
  };

  return (
    <div
      id="dialog"
      className={`dialog-container ${visible ? "visible" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Dialog;
