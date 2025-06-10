import React from "react";
import "./ConsultDialogCard.scss";

interface ConsultDialogCardProps {
  onClose: any;
  image: any;
  title: string;
  desc: string;
  tag: string;
}

const ConsultDialogCard = ({
  onClose,
  image,
  title,
  desc,
  tag,
}: ConsultDialogCardProps) => {
  return (
    <div className="consult-dialog-card">
      <button className="close-button" onClick={onClose}>
        <img src={require("../../../static/close-button.png")} />
      </button>
      <img src={image} />
      <div className="card-main">
        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
      </div>
      <div className="card-sub"></div>
    </div>
  );
};

export default ConsultDialogCard;
