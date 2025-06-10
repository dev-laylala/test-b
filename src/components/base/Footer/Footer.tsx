import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { ReactComponent as FooterLogo } from "../../../static/icons/Logo.svg";
import { ReactComponent as FooterPaypleLogo } from "../../../static/icons/payple_logo.svg";
import { useWindowDimensions } from "../../../hooks/WindowDimension";

const Footer = () => {
  const { width, height } = useWindowDimensions();

  // const paymentTest = useCallback(()=>{
  //   payletter.request();
  // }, [])
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo-wrapper">
          <FooterLogo className="footer-logo" />
          {width > 1200 && <FooterPaypleLogo className="footer-payple-logo" />}
        </div>
        <div className="footer-content-wrapper">
          <div className="text-content">
            <strong>(주)유닛블랙랩스</strong>
            <div className="text-content-group">
              <p>대표 : 이정민</p>
              <p>사업자등록번호 : 730-86-01268</p>
            </div>
            <div className="text-content-group">
              <address>
                주소 : 서울시 강남구 테헤란로 70길 12, 4층 402호
              </address>
              <p>통신판매업 신고번호 : 2022-서울강남-02507호</p>
              <Link to="/privacy" target="_blank">
                <span>서비스 이용약관</span>
              </Link>
              <Link to="/terms" target="_blank">
                <span>개인정보처리방침</span>
              </Link>
              {/* <div style={{cursor:"pointer"}} onClick={paymentTest}>
                <span>payment</span>
              </div> */}
            </div>
          </div>
          <div className="text-content">
            <div className="text-content-group">
              <span>고객센터 1644-8681</span>
              <span>오전 9시 - 오후 7시 (주말, 공휴일 제외)</span>
            </div>
          </div>
          {width <= 1200 && (
            <div style={{ marginTop: "24px" }}>
              <FooterPaypleLogo className="footer-payple-logo" />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
