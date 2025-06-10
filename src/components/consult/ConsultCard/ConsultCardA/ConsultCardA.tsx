import React from "react";
import "../ConsultCard.scss";
import "./ConsultCardA.scss";
import { ReactComponent as CloseIcon } from "../../../../static/icons/close.svg";
// import { ReactComponent as Image } from "../../../../static/popup-1.svg";
import Image from "../../../../static/popup-1.svg";

interface ConsultCardAProps {
  onClose?: any;
  isLanding?: boolean;
  onClick?: () => void;
}

const ConsultCardA = ({
  onClose,
  isLanding = false,
  onClick,
}: ConsultCardAProps) => {
  return (
    <div className="consult-card" id="type-a">
      <div style={{ width: "100%" }}>
        {!isLanding && (
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        )}
        <div className="card-image-wrapper">
          <img src={Image} className="card-image" alt="" />
        </div>
        <div className="card-main">
          <div className="card-title-wrapper">
            <div className="card-title-divider"></div>
            <div className="card-title">결합 A형</div>
            <div className="card-title-divider"></div>
          </div>

          <div className="card-desc">
            위 두가지 서비스를 함께 이용하시면,
            <br />
            <span className="card-desc-bold">비상주 사무실 할인 혜택</span>을
            드려요.
          </div>
          <div className="card-desc ps">{`(*세무기장료 별도 발생)`}</div>
        </div>
        <div className="card-sub">
          <small>36개월 기준</small>
          <div className="row">
            <p>
              <strong>12,000원</strong> / 월
            </p>
          </div>
          <label>
            <span>22,000</span>원
          </label>
          <span className="dc-badge">매월 1만원 할인</span>
        </div>
      </div>

      <div
        className="card-bottom"
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        결합 A형 신청하기
      </div>
    </div>
  );
};

export default ConsultCardA;
