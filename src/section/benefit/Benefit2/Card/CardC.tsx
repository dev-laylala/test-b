import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Card.scss";
import { ReactComponent as CardLogo } from "../../../../static/card-logo-c.svg";

const CardC = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <div className="card" id="type-c" style={{ background: "#F5F5F7" }}>
      <div className="card-header">
        <strong style={{ color: "#8AB534" }}>법률/법무 서비스.</strong>
        <p>기업전문 변호사/법무사 서비스를 특가로 이용해보세요.</p>
      </div>
      <div className="row">
        <div className="card-content" style={{ width: "55%" }}>
          <span style={{ background: "#B2D270" }}>제공 서비스</span>
          <p>
            {`기업법률자문, 공정거래, 민형사소송, 실용신안/특허 출원, 법인설립, 변경등기, 부동산 등기`}
          </p>
        </div>
        <CardLogo />
      </div>
    </div>
  );
};

export default CardC;
