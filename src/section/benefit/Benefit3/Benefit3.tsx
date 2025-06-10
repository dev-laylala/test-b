import React from "react";
import "./Benefit3.scss";
import { ReactComponent as LikeIcon } from "../../../static/like.svg";
import { useMediaQuery } from "react-responsive";

const Benefit3 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section benefit" id="benefit3">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <LikeIcon />
            베네핏 3
          </div>
          <div className="section-header-title">
            {isMobile ? (
              "최상의 조건으로 인프라 서비스를 이용해보세요"
            ) : (
              <>
                최상의 조건으로
                <br />
                인프라 서비스를 이용해보세요
              </>
            )}
          </div>
          <div className="section-header-sub">
            {isMobile ? (
              `인프라 서비스, 이제 신뢰할 수 있는 업체를
통해 신청하세요. 가장 좋은 조건으로
이용하실 수 있어요.`
            ) : (
              <>
                인프라 서비스, 이제 신뢰할 수 있는 업체를 통해 신청하세요.
                <br />
                가장 좋은 조건으로 이용하실 수 있어요.
              </>
            )}
          </div>
        </div>
        <div className="section-content">
          <div className="card-wrapper">
            <div className="card">
              <strong>사업자 카드.</strong>
              <p>
                높은 한도, 무료 연회비, 신규사업자 개설이 용이한 최상의 조건으로
                신청해 보세요.
              </p>
              <img
                src={require("../../../static/benefit3-card1.png")}
                className="card-image-1"
              />
            </div>
            <div className="card">
              <strong>영업용 차량.</strong>
              <p>
                믿을 수 있는 SK 렌터카에서 합리적인 비용 및 사업자 우대의 최적의
                조건으로 이용하세요.
              </p>
              <img
                src={require("../../../static/benefit3-card2.png")}
                className="card-image-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit3;
