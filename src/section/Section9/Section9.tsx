import React from "react";
import "./Section9.scss";
import { Masonry } from "@mui/lab";
import { useMediaQuery } from "react-responsive";
import { ScrollReveal } from "../../components/base/ScrollReveal";

const Section9 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section" id="section9">
      <div className="section-inner">

        <div className="section-header sticky">
          <div className="section-header-top">
            <img src={require("../../static/icons/check_list.png")} />
            <p>이용절차</p>
          </div>
          <h1 className="section-header-title">
            전담 매니저와 1:1 상담 후,<br />
            10분만에 받는 임대차 계약서
          </h1>
          <p className="section-header-sub">
            오피스 매니저가 상담부터 계약까지 꼼꼼하고
            빠르게 도와드리며, 당일 계약서 출력도 가능해요.
          </p>
        </div>

        <div className="section-content">
          <Masonry columns={2} spacing={isMobile ? 2 : 5}>
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/mail.png")} />
                </div>
                <div>
                  <span>1</span>
                  <p>빠른 상담신청</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="card blank" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/money.png")} />
                </div>
                <div>
                  <span>2</span>
                  { isMobile
                  ? <p>결제 <br/>(카드결제 가능)</p>
                  : <p>결제 (카드결제 가능)</p>
                }
                  {/* <p>결제 <br/>(카드결제 가능)</p> */}
                </div>
              </div>
            </ScrollReveal>
            <div className="card blank sm" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/pen.png")} />
                </div>
                <div>
                  <span>3</span>
                  <p>임대차 계약서</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="card blank sm" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/paper.png")} />
                </div>
                <div>
                  <span>4</span>
                  <p>사업자등록</p>
                </div>
              </div>
            </ScrollReveal>
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Section9;
