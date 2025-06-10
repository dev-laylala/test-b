import React from "react";
import "./LinkCard.scss";
import { ReactComponent as Image } from "../../static/popup-1.svg";
// import { useMediaQuery } from "react-responsive";

const LinkCardA = () => {
  return (
    <div className="link-card" id="type-a">
      <Image className="card-image" />
      <div className="title">
        <strong>결합 A형.</strong>
        <p>
          세무서비스를 함께 이용하시면,
          <br />
          비상주 사무실을 <span style={{ color: "#454F5D" }}>60% 혜택</span>을
          드려요
        </p>
        <p className="ps">{`(*세무기장료 별도 발생)`}</p>
      </div>

      <div className="sub">
        <strong className="sub-title">비상주 사무실</strong>
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

      <div className="bottom-tag">연 120,000원 혜택</div>
    </div>
  );
};

export default LinkCardA;
