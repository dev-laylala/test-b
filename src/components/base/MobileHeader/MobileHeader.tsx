import React, { useCallback, useState } from "react";
import "./MobileHeader.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../../static/icons/Logo.svg";
import { performConversionScript } from "../../../shared/ConversionHelper";

const MobileHeader = () => {
  const headerRef = React.useRef<any>(null);
  const [headerCollapse, setHeaderCollapse] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  const location = useLocation();

  React.useEffect(() => {
    let scrollY = 0;

    function onScroll() {
      if (headerRef.current) {
        if (window.scrollY > scrollY) {
          headerRef.current.style.position = "static";
          headerRef.current.style.marginBottom = "-56px";
          setHeaderCollapse(true);
          scrollY = window.scrollY;
        } else {
          setHeaderCollapse(false);
          headerRef.current.style.position = "fixed";
          scrollY = window.scrollY;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toFaq = useCallback(() => {
    toggleCollapse();
    const top = document.getElementById("section13")?.offsetTop;
    window.scrollTo({ top });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`mobile-header ${collapse ? "collapse_" : "expand_"} ${
          headerCollapse ? "header-collapse" : ""
        }`}
        id={"mobile-header"}
      >
        <div className="gnb">
          <Link
            to="/"
            className="logo"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <Logo width={160} />
          </Link>
          <button onClick={toggleCollapse} className="menu-toggle">
            <div className="toggle-icon">
              <span />
              <span />
            </div>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            {/* <a href="/offer" onClick={toggleCollapse}>
              <li>제공 서비스</li>
            </a> */}
            <a href="/benefits" onClick={toggleCollapse}>
              <li>베네핏 서비스</li>
            </a>
            <a href="/price" onClick={toggleCollapse}>
              <li>비용 안내</li>
            </a>
            <a href="/manual" onClick={toggleCollapse}>
              <li>이용 방법</li>
            </a>
            <a href="/union" onClick={toggleCollapse}>
              <li>결합 서비스</li>
            </a>
            <div style={{ cursor: "pointer" }} onClick={toFaq}>
              <li>자주 묻는 질문</li>
            </div>
          </ul>
          <ul>
            <Link to="/location">
              <li>
                <img src={require("../../../static/location.png")} />
                위치 안내
              </li>
            </Link>
          </ul>
          <ul>
            <Link
              to={`/consult${location.search}`}
              onClick={performConversionScript}
            >
              <li>
                <img src={require("../../../static/messages.png")} />
                지금 신청하기
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div
        className={`mobile-header-overlay ${collapse ? "" : "visible"}`}
        onClick={toggleCollapse}
      />
    </>
  );
};

export default MobileHeader;
