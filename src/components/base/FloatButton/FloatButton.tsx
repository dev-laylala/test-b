import React from "react";
import "./FloatButton.scss";
import { Link, useLocation } from "react-router-dom";
import { performConversionScript } from "../../../shared/ConversionHelper";

const FloatButton = () => {
  const [visible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<any>(null);
  const location = useLocation();

  React.useEffect(() => {
    let scrollY = 0;
    function isVisible() {
      if (window.scrollY > scrollY) {
        setVisible(true);
        scrollY = window.scrollY;
      } else {
        setVisible(false);
        scrollY = window.scrollY;
      }
    }

    window.addEventListener("scroll", isVisible);
    return () => window.removeEventListener("scroll", isVisible);
  }, []);

  return (
    <div className={`float-button-container ${visible ? "visible" : ""}`}>
      <div className="float-button-wrapper">
        <p>밸런스 스페이스로 비즈니스의 신뢰도를 높여보세요.</p>
        <Link
          to={`/consult${location.search}`}
          onClick={performConversionScript}
        >
          <button className="float-button" ref={buttonRef}>
            빠른 상담하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FloatButton;
