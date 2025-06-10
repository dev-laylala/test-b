import React from "react";
import "./SalePopup.scss";
import { useLocalStorage } from "../../../shared/utill";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";

const SalePopup = () => {
  const [closeToday, setCloseToday] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [isTodayClosed, setIsTodayClosed] = useLocalStorage("isTodayClosed", {
    nowDate: "",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const nowDate = format(new Date(), "yyyy-MM-dd");

  if (isTodayClosed.nowDate === nowDate && isOpen) {
    setIsOpen(false);
  }

  const toggleCloseToday = React.useCallback(() => {
    setCloseToday(!closeToday);
  }, [closeToday, setCloseToday]);

  const close = React.useCallback(() => {
    if (closeToday) {
      setIsTodayClosed({ nowDate });
    }
    setIsOpen(false);
  }, [closeToday, setIsTodayClosed, setIsOpen]);

  return (
    <div>
      {isOpen && (
        <div className="sale-popup-wrap">
          <div className="sale-popup">
            {isMobile ? (
              <img
                className="popup-img"
                src={require("../../../static/popup-mobile.png")}
                alt=""
              />
            ) : (
              <img
                className="popup-img"
                src={require("../../../static/popup-pc.png")}
                alt=""
              />
            )}

            <div className="request-consult">
              <a href="/consult">
                {/* <img
                  src={require("../../../static/request-consult-btn.png")}
                  alt=""
                /> */}
                {isMobile ? (
                  <div className="request-consult-btn-m">
                    할인가로 상담 신청하기
                  </div>
                ) : (
                  <div className="request-consult-btn-pc">
                    할인가로 상담 신청하기
                  </div>
                )}
              </a>
            </div>
            <div className="bottom-area">
              <div
                className={`close-today ${closeToday ? "active" : ""}`}
                onClick={toggleCloseToday}
              >
                오늘 하루 보지 않기
              </div>
              <div className="close" onClick={close}>
                닫기
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalePopup;
