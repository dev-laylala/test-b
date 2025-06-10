import React from "react";
import { Card1, Card2, Card3, Card4, Card5 } from "./Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./MobileContent.scss";

import { Pagination } from "swiper";

const MobileContent = () => {
  const [active, setActive] = React.useState(0);
  const [padding, setPadding] = React.useState(
    (window.document.body.clientWidth - 280) / 2
  );

  return (
    <div className={`section-inner mode-${active}`}>
      <div className="section-content">
        <div className="section-header">
          <h1 className="section-header-title">
            밸런스스페이스가<br />
            국내 1위인 5가지 이유
          </h1>
        </div>

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
          onActiveIndexChange={(props: any) => setActive(props.activeIndex)}
        >
          <SwiperSlide>
            <Card1 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide>
            <Card4 />
          </SwiperSlide>
          <SwiperSlide>
            <Card5 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileContent;
