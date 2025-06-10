import React, { useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import MobileHeader from "../MobileHeader/MobileHeader";
import "./Header.scss";
import { ReactComponent as Logo } from "../../../static/icons/Logo.svg";
import { performConversionScript } from "../../../shared/ConversionHelper";

const Header = () => {
  const [collapse, setCollapse] = React.useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const location = useLocation();

  React.useEffect(() => {
    let scrollY = 0;

    function isVisible() {
      if (window.scrollY > scrollY) {
        setCollapse(true);
        scrollY = window.scrollY;
      } else {
        setCollapse(false);

        scrollY = window.scrollY;
      }
    }

    window.addEventListener("scroll", isVisible);
    return () => window.removeEventListener("scroll", isVisible);
  }, []);

  const toFaq = useCallback(() => {
    const top = document.getElementById("section13")?.offsetTop;
    window.scrollTo({ top });
  }, []);

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header className={`header ${collapse ? "collapse_" : ""}`} id={"header"}>
      <div className="gnb">
        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <Logo />
        </Link>
        <nav className="nav">
          <ul>
            <li className="dropdown">
              <Link to="/">
                {/* styled with tailwindcss */}
                <div className="flex flex-row">
                  <div>비상주 사무실</div>
                  <img
                    className="ml-[10px] h-[8px] my-auto"
                    src={require("../../../static/bottom_chevron.png")}
                  />
                </div>
              </Link>
              <div className="dropdown-list">
                <div className="space" />
                <ul>
                  {/* <a href="/offer">제공 서비스</a> */}
                  <a href="/benefits">베네핏 서비스</a>
                  <a href="/price">비용 안내</a>
                  <a href="/manual">이용 방법</a>
                  <a href="/union">결합 서비스</a>
                  <div style={{ cursor: "pointer" }} onClick={toFaq}>
                    자주 묻는 질문
                  </div>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/location">위치 안내</Link>
            </li>
          </ul>
          <Link
            to={`/consult${location.search}`}
            className="filled"
            onClick={performConversionScript}
          >
            지금 신청하기
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
