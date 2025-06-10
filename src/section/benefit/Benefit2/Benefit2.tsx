import React from "react";
import "./Benefit2.scss";
import { ReactComponent as LikeIcon } from "../../../static/like.svg";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import CardA from "./Card/CardA";
import CardB from "./Card/CardB";
import CardC from "./Card/CardC";

const Benefit2 = () => {
  const [padding, setPadding] = React.useState(
    (window.document.body.clientWidth - 280) / 2
  );

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <section className="section benefit" id="benefit2">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <LikeIcon />
            스페셜 혜택 {/* 2 */}
          </div>
          <div className="section-header-title">
            밸런스 스페이스 회원에게만<br />
            사업자 필수 전문 서비스
          </div>
          <div className="section-header-sub">
            {isMobile
              ? <>세무, 노무, 법률/법무 등 검증된 전문가를 통한
                프리미엄급 사업자 필수 서비스를 최대 혜택으로 이용할 수 있어요.</>
              : <>세무, 노무, 법률/법무 등 검증된 전문가를 통한<br />
              프리미엄급 사업자 필수 서비스를 최대 혜택으로 이용할 수 있어요.</>}
          </div>
        </div>
        <div className="section-content">
          {isMobile ? (
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={padding}
              updateOnWindowResize
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CardA />
              </SwiperSlide>
              <SwiperSlide>
                <CardB />
              </SwiperSlide>
              <SwiperSlide>
                <CardC />
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="row">
              <div className="col">
                <CardA />
              </div>
              <div className="col">
                <CardB />
                <CardC />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefit2;
