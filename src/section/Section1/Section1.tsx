import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import "./Section1.scss";
import { performConversionScript } from "../../shared/ConversionHelper";

const Section1 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const location = useLocation();

  return (
    <section className="section" id="section1">
      <div className="section-inner">
        <p className="sub">누적 계약 2.5만건, 재계약률 98%</p>
        <h1 className="title gradient">
          {isMobile ? (
            <>
              국내 NO.1
              <br />
              비상주 사무실
              <br />
              밸런스 스페이스
            </>
          ) : (
            <>
              국내 NO.1 비상주 사무실
              <br />
              밸런스 스페이스
            </>
          )}
        </h1>
        <Link
          to={`/consult${location.search}`}
          onClick={performConversionScript}
        >
          <button>지금 신청하기</button>
        </Link>
      </div>
      <div className="main-image" />
    </section>
  );
};

export default Section1;
