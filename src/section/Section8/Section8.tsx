import React from "react";
import CardIcon from "../../static/card.svg";
import BestIcon from "../../static/best.svg";
import "./Section8.scss";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  title: string;
  amount: string;
  discount: string;
}

const Card = ({ title, amount, discount }: CardProps) => {
  return (
    <div className="card">
      <img className="best-badge" src={BestIcon} />
      <p className="card-title">{title}</p>
      <div className="card-sub">
        <p className="amount">
          <strong>{amount}</strong> / 월
        </p>
        <p className="discount">
          <span>{discount}</span>원
        </p>
      </div>
    </div>
  );
};

const Section8 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section section8" id="section8">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            {/* <CardIcon /> */}
            <img src={CardIcon} />
            이용 요금
          </div>
          <div className="section-header-title">
            {
              isMobile ?
                <>
                  보증금, 예치금 없는 최대 혜택가로 비상주 사무실을 이용해 보세요.
                </>:
                <>
                  보증금, 예치금 없는 최대 혜택가로
                  <br />
                  비상주 사무실을 이용해 보세요.
                </>
            }

          </div>
        </div>

        <div className="section-content">
          <div className="card-list">
            <Card title="3개월" amount="60,000원" discount="100,000" />
            <Card title="6개월" amount="40,000원" discount="100,000" />
            <Card title="12개월" amount="30,000원" discount="100,000" />
            <Card title="24개월" amount="25,000원" discount="100,000" />
            <Card title="36개월" amount="22,000원" discount="100,000" />
          </div>
          <p className="ghost">(VAT 별도)</p>
          <p className="small">*선릉점, 신논현점 금액 별도 문의</p>
        </div>
      </div>
    </section>
  );
};

export default Section8;
