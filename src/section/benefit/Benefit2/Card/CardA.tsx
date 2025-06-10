import React from "react";
import "./Card.scss";

const CardA = () => {
  return (
    <div className="card" id="type-a" style={{ background: "#EAF6FE" }}>
      <div>
        <div className="card-header">
          <strong style={{ color: "#32A6EC" }}>세무 서비스.</strong>
          <p>
            {`초기사업자 맞춤 세무서비스로
더 큰 절세 혜택을 경험해보세요.`}
          </p>
        </div>
        <div className="card-content">
          <span style={{ background: "#61BEF5" }}>제공 서비스</span>
          <p>세무기장, 종합소득세, 법인세 신고</p>
        </div>
      </div>
      <img src={require("../../../../static/card-logo-a.png")} />
    </div>
  );
};

export default CardA;
