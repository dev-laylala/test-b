import React from "react";
import "./Section2_3.scss";

import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { performConversionScript } from "../../shared/ConversionHelper";
import { CUSTOMERS_REVIEW } from "../../dummy/ReviewCard/index";

import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Section2_3 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const location = useLocation();

  return (
    <div className="section" id="section2_3">
      <div className="sec2_3-header">
        <h5>
          <span>증명된 만족도 1위</span>
          <br />
          실제 25,000명 사업자 분들의 이용 후기
        </h5>
      </div>

      {!isMobile && (
        <div className="sec2_3-main">
          <Swiper
            observer={true}
            observeParents={true}
            direction={"horizontal"}
            slidesPerView="auto"
            centeredSlides={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            parallax={true}
            pagination={{ clickable: false }}
            spaceBetween={24}
            loop={true}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {CUSTOMERS_REVIEW.map((data, index) => (
              <SwiperSlide>
                <ReviewCard key={index} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {isMobile && (
        <div className="sec2_3-main-mobile">
          <Swiper
            observer={true}
            observeParents={true}
            direction={"horizontal"}
            slidesPerView="auto"
            centeredSlides={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            parallax={true}
            pagination={{ clickable: false }}
            spaceBetween={21}
            loop={true}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {CUSTOMERS_REVIEW.filter((item) => item.id < 5).map(
              (data, index) => (
                <SwiperSlide>
                  <ReviewCard key={index} data={data} />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <Swiper
            observer={true}
            observeParents={true}
            direction={"horizontal"}
            slidesPerView="auto"
            // centeredSlides={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            parallax={true}
            pagination={{ clickable: false }}
            spaceBetween={21}
            loop={true}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {CUSTOMERS_REVIEW.filter((item) => 4 < item.id).map(
              (data, index) => (
                <SwiperSlide>
                  <ReviewCard key={index} data={data} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      )}

      {!isMobile && (
        <div className="sec2_3-tail">
          <Link
            to={`/consult${location.search}`}
            onClick={performConversionScript}
          >
            <button>지금 신청하기</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Section2_3;
