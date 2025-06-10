import React from "react";
import "./Section2_2.scss";

import { useMediaQuery } from "react-responsive";

const Section2_2 = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)"
  });

  return (
    <div className="section" id="section2_2">

      <div className="sec2_2-header">
        <span>국내1위</span><br/>
        밸런스 스페이스만의 프리미엄 혜택
      </div>

      <div className="sec2_2-main">
        <div>
          <div>1</div>
          <p>
            세무 + 법인 설립 서비스 결합 시 <br />
            <span>이용료 월 1만원대</span>
          </p>
        </div>
        <div>
          <div>2</div>
          <p>
            <span>임대차 계약 전문 매니저 1:1</span><br />
            <span>매칭</span>으로 빠르고 친절한 상담
          </p>
        </div>
        <div>
          <div>3</div>
          <p>
            사업자 등록 전문가를 통한<br />
            <span>업종별 사업자 등록 무료 대행</span>
          </p>
        </div>
        <div>
          <div>4</div>
          <p>
            관공서 <span>현장 실사 지원</span>으로<br />
            신뢰성 보장
          </p>
        </div>
      </div>
      { !isMobile
        ? <div className="sec2_2-tail">
            {/* 사업자등록만 <span>1,000번</span> 이상 진행한 <br/> */}
            전문가가 직접 사업자등록을 <span>무료로 대행</span>해 드립니다.
          </div>
        : <div className="sec2_2-tail">
            {/* 사업자등록만 <span>1,000번</span> 이상 진행한 <br/> */}
            전문가가 직접 사업자등록을<br/>
            <span>무료로 대행</span>해 드립니다.
          </div>
      }
    </div>
  )
}

export default Section2_2
