import React from "react";
import "./Section2.scss";
import { Masonry } from "@mui/lab";
import { ScrollReveal } from "../../components/base/ScrollReveal";
import ProfileImage from "../../static/profile-circle.png";
import MoneyBagImage from "../../static/icons/1.png";
import ThunderImage from "../../static/icons/2.png";
import ThumbImage from "../../static/icons/3.png";

const Section2 = () => {
  return (
    <section className="section" id="section2">
      <div className="section-inner">
        <h1 className="title">
          비용은 <strong>최저,</strong>
          <br />
          서비스는 <strong>최고,</strong>
          <br />
          만족도는 <strong>최상</strong>
        </h1>
        <div className="masonry-container">
          <div className="masonry-column column-left">
            <div className="masonry-item">
              <div className="item-header">
                <img src={ProfileImage} className="masonry-profile-img" />
                <div className="item-header-text">
                  <strong>이진호</strong>님의 리뷰
                </div>
              </div>
              <p className="item-body">
                <strong>저렴한 수수료</strong>로 비용을 많이 아낄 수 있어서 좋았어요.
              </p>
              <img src={MoneyBagImage} className="bottom-icon icon-money-bag" />
            </div>
            <div className="masonry-item item-dark">
              <div className="item-header">
                <div className="item-header-text">
                  고객만족도
                </div>
              </div>
              <div className="bottom-percentage-number">93%</div>
            </div>
            <div className="masonry-item">
              <div className="item-header">
                <img src={ProfileImage} className="masonry-profile-img" />
                <div className="item-header-text">
                  <strong>이정진</strong>님의 리뷰
                </div>
              </div>
              <p className="item-body">
                우편물 관리, 재계약 등의 <strong>사후관리가 잘 되어 좋았어요.</strong>
              </p>
              <img src={ThumbImage} className="bottom-icon icon-thumb" />
            </div>
          </div>
          <div className="masonry-column column-right">
            <div className="masonry-item item-dark">
              <div className="item-header">
                <div className="item-header-text">
                  고객추천지수
                </div>
              </div>
              <div className="bottom-percentage-number">92.5%</div>
            </div>
            <div className="masonry-item">
              <div className="item-header">
                <img src={ProfileImage} className="masonry-profile-img" />
                <div className="item-header-text">
                  <strong>김휘로</strong>님의 리뷰
                </div>
              </div>
              <p className="item-body">
                신청과 계약 과정이 <strong>빠르고 편리해요.</strong>
              </p>
              <img src={ThunderImage} className="bottom-icon icon-thunder" />
            </div>
            <div className="masonry-item item-dark">
              <div className="item-header">
                <div className="item-header-text">
                  재계약 의사
                </div>
              </div>
              <div className="bottom-percentage-number">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
