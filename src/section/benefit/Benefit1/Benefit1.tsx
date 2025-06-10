import React from "react";
import "../Benefit.scss";
import "./Benefit1.scss";
import { ReactComponent as LikeIcon } from "../../../static/like.svg";
import BenefitCard from "./BenefitCard";
import BenefitCardB from "./BenefitCardB";
import { useMediaQuery } from "react-responsive";

const Benefit1 = () => {
  const [active, setActive] = React.useState(0);

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section benefit" id="benefit">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <LikeIcon />
            베네핏 1
          </div>
          <div className="section-header-title">
            {`200 종류가 넘는 정부지원금, 
무료로 컨설팅 받을 수 있어요`}
          </div>
          <div className="section-header-sub">
            {isMobile
              ? `정부지원금 무료 컨설팅을 이용해 보세요. 
내 사업장에 딱 맞는 정부지원금을
상세히 알려드려요. 신청 시 말씀해 주시면,
전문 매니저가 도와드립니다.`
              : `정부지원금 무료 컨설팅을 이용해 보세요. 
내 사업장에 딱 맞는 정부지원금을 상세히 알려드려요. 
신청 시 말씀해 주시면, 전문 매니저가 도와드립니다.`}
          </div>
        </div>
        <div className="link-group">
          <button
            className={`link-item ${active === 0 ? "active" : ""}`}
            onClick={() => setActive(0)}
          >
            개인사업자
          </button>
          <button
            className={`link-item ${active === 1 ? "active" : ""}`}
            onClick={() => setActive(1)}
          >
            법인사업자
          </button>
        </div>
        <div className="section-content">
          {isMobile ? (
            active === 0 ? (
              <BenefitCard />
            ) : (
              <BenefitCardB />
            )
          ) : (
            <>
              <BenefitCard />
              <BenefitCardB />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefit1;
