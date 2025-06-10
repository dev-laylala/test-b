import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Section5.scss";

const Section5 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section section5" id="section5">
      <div className="section-inner">
        <div className="section-header">
          <h3 className="section-header-title">
            {isMobile ? (
              <>
                이런 서비스를
                <br />
                받을 수 있어요!
              </>
            ) : (
              <>이런 서비스를 받을 수 있어요!</>
            )}
          </h3>
        </div>
        <div className="card-list">
          <div className="card">
            <div className="card-image" id="image_01" />
            <p className="sub">건물 주소 임대</p>
          </div>
          <div className="card">
            <div className="card-image" id="image_02" />
            <p className="sub">사업자등록 대행</p>
          </div>
          <div className="card">
            <div className="card-image" id="image_03" />
            <p className="sub">우편물 관리 서비스</p>
            {/* <p className="label">(월 2회 발송)</p> */}
          </div>
          <div className="card">
            <div className="card-image" id="image_04" />
            <p className="sub">
              {isMobile
                ? `기관 / 관공서
실사 지원`
                : `기관 / 관공서 실사 지원`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
