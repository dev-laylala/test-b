import React from "react";
import "./LinkCard.scss";
import { ReactComponent as Image } from "../../static/popup-2.svg";
import { useMediaQuery } from "react-responsive";

const LinkCardB = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <div className="link-card" id="type-b">
      <Image />
      <div className="title" style={{ color: "#80B8D0" }}>
        <strong style={{ color: "#2DBCFF" }}>결합 B형.</strong>
        <p>
          법인 설립 후 세무서비스를 이용하시면, <br />
          법인 설립 수수료 <span style={{ color: "#454F5D" }}>100% 혜택</span>을
          드려요.
        </p>
        <p className="ps">{`(*세무기장료 별도 발생)`}</p>
      </div>
      <div className="sub-wrapper">
        <div className="sub">
          <strong className="sub-title" style={{ color: "#2DBCFF" }}>
            법인설립
          </strong>
          <div className="amount">
            <div className="amount-text">
              <strong>0원 </strong>
            </div>
            <div className="tag-100">100% 할인</div>
          </div>
          <div className="discount">
            <span>550,000</span>원
          </div>
        </div>
        <div className="sub">
          <strong className="sub-title" style={{ color: "#2DBCFF" }}>
            비상주 사무실
          </strong>
          <div className="amount">
            <div className="amount-text">
              <strong>
                15,000원
                <span>/ 월</span>
              </strong>
            </div>
            <div className="tag">월 1만원 할인</div>
          </div>
          <div className="discount">
            <span>25,000원</span> / 월
          </div>
        </div>
      </div>
      <div className="bottom-tag">연 682,000원 혜택</div>
    </div>
  );
};

export default LinkCardB;
