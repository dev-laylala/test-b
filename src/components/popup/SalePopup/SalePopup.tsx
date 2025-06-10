import React from 'react';
import "./SalePopup.scss";
import { useLocalStorage } from "../../../shared/utill";
import { format } from "date-fns";

const SalePopup = () => {
  const [closeToday, setCloseToday] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [isTodayClosed, setIsTodayClosed] = useLocalStorage("isTodayClosed", {nowDate: ""});
  const nowDate = format(new Date(), "yyyy-MM-dd");

  if (isTodayClosed.nowDate === nowDate && isOpen) {
    setIsOpen(false);
  }

  const toggleCloseToday = React.useCallback(() => {
    setCloseToday(!closeToday);
  }, [closeToday, setCloseToday]);

  const close = React.useCallback(() => {
    if (closeToday) {
      setIsTodayClosed({nowDate});
    }
    setIsOpen(false);
  }, [closeToday, setIsTodayClosed, setIsOpen]);

  return (
    <div>
      {isOpen && (
        <div className="sale-popup-wrap">
          <div className="sale-popup">
            <img src={require("../../../static/popup-img.png")} />
            <div className="request-consult">
              <a href="/consult">
                <img src={require("../../../static/request-consult-btn.png")} />
              </a>
            </div>
            <div className="bottom-area">
              <div className={`close-today ${closeToday ? 'active' : ''}`} onClick={toggleCloseToday}>
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
  )
}

export default SalePopup;
