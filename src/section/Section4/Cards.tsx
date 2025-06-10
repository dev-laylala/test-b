import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Cards.scss";
import { ReactComponent as Card2ImgMobile } from "../../static/card-2-m.svg";
import { ReactComponent as Card2Img } from "../../static/card-2.svg";
import { ReactComponent as Card4Img } from "../../static/card-4.svg";
import { ReactComponent as Card4ImgMobile } from "../../static/card-4-m.svg";
import { ReactComponent as Card5Img } from "../../static/location-marker.svg";
import { ReactComponent as Card5ImgMobile } from "../../static/location-marker-m.svg";
import BigMarker from '../../static/rect.png';

export const Card1 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <div className="card" id="card1">
      <div className="card-header">
        <h3 className="card-title">
            1. 이용료 최대 혜택
        </h3>
        <p className="card-sub">
          {isMobile
            ? <>
              타사 대비 최대 30% 절감된 이용료로, 연간 18만원 이상의 비용을 절약할 수 있어요.
            </>
            : <>
              타사 대비 최대 30% 절감된 이용료로,<br />연간 18만원 이상의 비용을 절약할 수 있어요.
            </>
          }
        </p>
      </div>
      <div className="info-wrapper">
        <div className="info">
          <div className="bar">타사</div>
          <p>월 40,000원</p>
        </div>
        <div className="info blue">
          <div className="bar blue">밸런스 스페이스</div>
          <p>월 25,000원</p>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <div className="card" id="card2">
      <div className="card-header">
        <h3 className="card-title">
          2. 보증금, 예치금 0원
        </h3>
        <p className="card-sub">
          {isMobile ?
            <>보증금, 예치금 지급 및 반환 걱정이 없어
              사업 초기 비용을 더욱 아낄 수 있어요.</> :
            <>보증금, 예치금 지급 및 반환 걱정이 없어<br />
              사업 초기 비용을 더욱 아낄 수 있어요.</>
          }
        </p>
      </div>
      <div className="card-content" style={{ justifyContent: "center" }}>
        {isMobile ? <Card2ImgMobile width={"100%"} /> : <Card2Img />}
      </div>
    </div>
  );
};

export const Card3 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className="card" id="card3">
      <div className="card-header">
        <h3 className="card-title">
         3. 회원 전용 프리미엄 혜택
        </h3>
        <p className="card-sub">
          {isMobile ? (
            <>서울 역세권 고급 건물 주소를 최대
              혜택으로 이용할 수 있으며, 우편물 관리, 실사지원은 물론 사업자 등록, 세무, 법률, 노무 등 프리미엄 서비스까지 제공해요.</>
          ) : (
            <>
              서울 역세권 고급 건물 주소를 최대 혜택으로 이용할 수 있으며,<br />
              우편물 관리, 실사지원은 물론 사업자 등록, 세무, 법률, 노무 등 프리미엄 서비스까지 제공해요.
            </>
          )}
        </p>
      </div>
      <div className="card-content">
        {/* <li>정부지원금 무료 컨설팅</li> */}
        <li>노무/법률/법무/세무 서비스</li>
        <li>sk렌터카 영업용차량 서비스</li>
      </div>
    </div>
  );
};

export const Card4 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className="card" id="card4">
      <div className="card-header">
        <h3 className="card-title">
          4. 빠르고 편리한 10분 전자계약
        </h3>
        <p className="card-sub">
          직접 방문하거나 번거로운 서류 제출없이 빠르게 계약이 진행되어 불필요한 시간 소모를 줄일 수 있어요.
        </p>
      </div>
      <div className="card-content">
        {isMobile ? (
          <Card4ImgMobile className="card-image" />
        ) : (
          <Card4Img className="card-image" />
        )}
        <label>*법인의 경우, 서류 제출이 필요합니다.</label>
      </div>
    </div>
  );
};
export const Card5 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className="card" id="card5">
      <div className="card-header">
        <h3 className="card-title">
          {isMobile ?
            <>5. 강남부터 부산까지 <br />원하는 지역 선택</> :
            <>5. 강남부터 부산까지 원하는 지역 선택</>
          }
        </h3>
        <p className="card-sub">

          {isMobile ?
            <>서울 중심업무지구부터<br />비과밀억제권역까지 사업에 맞춰<br />지역을 자유롭게 선택할 수 있어요.</> :
            <>서울 중심업무지구부터 비과밀억제권역까지<br />사업에 맞춰 지역을 자유롭게 선택할 수 있어요.</>
          }

        </p>
      </div>
      <div className="card-content">
        {isMobile ? (
        <Card5ImgMobile id="card5-image"/>
        )
        : (
          <>
            <Card5Img id="card5-image"/>
            <img className= "mostBig-marker" src={BigMarker} alt="" />
            <img className="secondBig-marker" src={BigMarker} alt="" />
            <img className="thirdBig-marker" src={BigMarker} alt="" />
          </>
        )
        }
      </div>

    </div>
  );
};
