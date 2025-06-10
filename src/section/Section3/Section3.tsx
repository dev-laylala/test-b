import React, { useState } from "react";
import "./Section3.scss";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as ArrowBottom } from "../../static/arrow-bottom.svg";
import { ReactComponent as HouseIcon } from "../../static/house.svg";
import { ReactComponent as BuildingIcon } from "../../static/building.svg";
import { ReactComponent as CardIcon } from "../../static/card-receive.svg";
import { ReactComponent as BreifcaseIcon } from "../../static/briefcase.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Parallax } from "swiper";

const Content1 = () => {
  const [styleState, setStyleState] = useState('gangnam');
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)"
  });

  return (
    <>
      <div className="card">
        <div className="card-left">
          <img src={require("../../static/icons/house.png")} />
          <strong>아파트 주소지</strong>
        </div>
        <p>○○시 ○○구 ○○아파트 A동, 301호</p>
      </div>
      <ArrowBottom />
      <div className="card">
        <Swiper
                observer = {true}
                observeParents = {true}
                direction={"vertical"}
                speed={1500}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                parallax={true}
                pagination={{
                  clickable: false,
                }}
                spaceBetween={isMobile ? 20 : 10}
                loop={true}
                allowTouchMove={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card-left">
                    <img src={require("../../static/icons/building.png")} />
                    <strong>건물 주소지 A</strong>
                  </div>
                  <div className="card-right">
                  <div className="content">
                  {isMobile ?
                    <>
                      <p>서울특별시 강남구 테헤란로</p>

                    </>
                    :
                    <>
                      <p>서울특별시 강남구 테헤란로</p>
                    </>
                    }
                    <div className='gangnam-wrapper'>
                      <span className='gangnam-feature1'>중심업무지구</span>
                      <span className='gangnam-feature2'>월 25,000원</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card-left">
                    <img src={require("../../static/icons/building.png")} />
                    <strong>건물 주소지 B</strong>
                  </div>
                  <div className="card-right">
                  <div className="content">
                    {isMobile ?
                    <>
                      <p>서울특별시 영등포구 국회대로</p>
                    </>
                    :
                    <>
                      <p>서울특별시 영등포구 국회대로</p>
                    </>
                    }
                    <div className="yeongdeungpo-wrapper">
                      <span className='yeongdeungpo-feature1'>중심업무지구</span>
                      <span className='yeongdeungpo-feature2'>월 25,000원</span>
                    </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card-left">
                    <img src={require("../../static/icons/building.png")} />
                    <strong>건물 주소지 C</strong>
                  </div>
                  <div className="card-right">
                  <div className="content">
                    {isMobile ?
                    <>
                      <p>경기도 용인시 기흥구 강남서로</p>
                    </>
                    :
                    <>
                      <p>경기도 용인시 기흥구 강남서로</p>
                    </>
                    }

                    <div className="yongin-wrapper">
                      <span className='yongin-feature1'>비과밀억제권역 세금 혜택</span>
                      <span className='yongin-feature2'>월 25,000원</span>
                    </div>
                  </div>
                  </div>
                </SwiperSlide>
          </Swiper>
        </div>
    </>
  );
};

const Content2 = () => {
  return (
    <div className="square-wrapper">
      <div className="square">
        <p className="square-text">
          <strong>자택에서 사업을 운영</strong>하여 주소지만 필요한 사업자
        </p>
        <div className="square-icon">
          <HouseIcon />
        </div>
      </div>
      <div className="square">
        <p className="square-text">
          업무 특성상 별도의 <strong>사무실 공간이 불필요</strong>한 사업자
        </p>
        <div className="square-icon">
          <BuildingIcon />
        </div>
      </div>
      <div className="square">
        <p className="square-text">
          임대료, 관리비 등의 <strong>비용 절감이 필요</strong>한 사업자
        </p>
        <div className="square-icon">
          <CardIcon />
        </div>
      </div>
      <div className="square">
        <p className="square-text">
          거래처에 <strong>높은 비즈니스 신뢰도</strong>를 주고자 하는 사업자
        </p>
        <div className="square-icon">
          <BreifcaseIcon />
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className={`section ${active ? "active" : ""}`} id="section3">
      <div className="section-inner">
        <div className="section-header">
          <h3 className="section-header-title">
            {isMobile ? (
              <>비상주 사무실<br />밸런스 스페이스는,</>
              ) : (
              <>비상주 사무실 밸런스 스페이스는,</>
              ) }

          </h3>
          <p className="section-header-sub">
            {isMobile ? (
              <>
                사업에 최적화된 ‘주소지 임대’ 서비스로 전 지점 법인에서<br />
                운영하여 안전합니다. 사업특성에 따라 지역을 선택하여<br />
                비즈니스 신뢰도를 높여보세요.
              </>
            ) : (
              <>
                사업에 최적화된 ‘주소지 임대’ 서비스로 전 지점 법인에서 운영하여 안전합니다.<br />
                사업 특성에 따라 지역을 선택하여 비즈니스 신뢰도를 높여보세요.
              </>
            )}
          </p>
        </div>
        <div className="wrap">
          <div className="link-group">
            <button
              className={`link ${active ? "" : "active"}`}
              onClick={toggleActive}
            >
              주소 비교
            </button>
            <button
              className={`link ${!active ? "" : "active"}`}
              onClick={toggleActive}
            >
              추천 대상
            </button>
          </div>

          {active ? <Content2 /> : <Content1 />}
        </div>
      </div>
    </section>
  );
};

export default Section3;
