import React from "react";
import "./Card.scss";

const CardB = () => {
  return (
    <div className="card" id="type-b" style={{ background: "#F5F5F7" }}>
      <div className="card-header">
        <strong style={{ color: "#F3BD1D" }}>노무 서비스.</strong>
        <p>최고의 노무 서비스를 특가로 이용해보세요.</p>
      </div>
      <div className="row">
        <div className="card-content" style={{ width: "50%" }}>
          <span style={{ background: "#FFD14B" }}>제공 서비스</span>
          <p>
            근로계약서, 연차휴가, 급여대장, 취업규칙, 비정규직(일용직 등), 4대
            보험, 노동법 상담
          </p>
        </div>
        <img src={require("../../../../static/card-logo-b.png")} />
      </div>
    </div>
  );
};

export default CardB;
