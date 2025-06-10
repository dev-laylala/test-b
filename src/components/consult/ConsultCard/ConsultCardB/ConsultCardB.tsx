import React from "react";
import "../ConsultCard.scss";
import "./ConsultCardB.scss";
import { ReactComponent as CloseIcon } from "../../../../static/icons/close.svg";
// import { ReactComponent as Image } from "../../../../static/popup-2.svg";
import Image from "../../../../static/popup-2.svg";

interface ConsultCardBProps {
  onClose?: any;
  isLanding?: boolean;
  onClick?: () => void;
}

const ConsultCardB = ({
  onClose,
  isLanding = false,
  onClick,
}: ConsultCardBProps) => {
  return (
    <div className="consult-card" id="type-b">
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
          <div className="card-title-divider-B"></div>
          <div className="card-title">결합 B형</div>
          <div className="card-title-divider-B"></div>
        </div>
        <div className="card-desc">
          위 세가지 서비스를 함께 이용하시면,
          <br />
          비상주 사무실 할인 혜택과
          <br />
          <span className="card-desc-bold">법인설립 수수료 0원의 혜택</span>을
          드려요.
        </div>

        <div className="card-desc ps">{`(*세무기장료 별도 발생)`}</div>
      </div>
      <div className="card-sub-wrapper">
        <div className="card-sub">
          <small>36개월 기준</small>
          <div className="row">
            <p>
              <strong>12,000원</strong> / 월
            </p>
            {/* <span>월 1만원 할인</span> */}
          </div>
          <label>
            <span>22,000</span>원
          </label>
          <span className="dc-badge-b">매월 1만원 할인</span>
        </div>
        <div className="card-sub">
          <small>법인설립</small>
          <div className="row">
            <p>
              <strong>0원</strong>
            </p>
            {/* <span>100% 할인</span> */}
          </div>
          <label style={{ marginTop: "8px" }}>
            <div>평균 수수료</div>
            <div style={{ marginTop: "8px" }}>550,000원 전액 지원</div>
          </label>
        </div>
      </div>
      <div
        className="card-bottom"
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        결합 B형 신청하기
      </div>
    </div>
  );
};

export default ConsultCardB;
