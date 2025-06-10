import React from "react";
import "./ConsultDialog.scss";

const ConsultDialog: React.FC<{ visible: boolean }> = ({
  visible,
  children,
}) => {
  return (
    <div className={`consult-dialog ${visible ? "visible" : ""}`}>
      {children}
      <div className="overlay" />
    </div>
  );
};

export default ConsultDialog;
