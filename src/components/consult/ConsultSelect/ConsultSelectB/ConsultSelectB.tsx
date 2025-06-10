import React from "react";
import "../ConsultSelect.scss";
import "./ConsultSelectB.scss";

interface ConsultSelectBProps {
  title: string;
  price: string;
  ogPrice?: string;
  best?: boolean;
  onClick: any;
  type?: string;
  discount?: boolean;
}

const ConsultSelectB = ({
  title,
  price,
  ogPrice = "",
  best,
  onClick,
  type = "",
  discount = false,
}: ConsultSelectBProps) => {
  return (
    <div className="consult-select" id="type-b" onClick={onClick}>
      {discount && type === "비상주사무실" && (
        <div className="discount-badge-wrapper">
          <img src="/assets/discount.png" alt="" />
        </div>
      )}
      <div className="left">
        <strong>{title}</strong>
        {/* {best && <span className="best">BEST</span>} */}
      </div>
      <div className="right">
        {ogPrice.length > 0 && (
          <>
            <p className="og-price-wrapper">
              <strong className="og-price">{ogPrice}</strong> / 월
            </p>
            <div className="vertical-divider">|</div>
          </>
        )}
        <p
          style={
            type === "A.비상주+세무"
              ? { color: "#5B7CFF" }
              : type === "B.비상주+세무+법인설립"
              ? { color: "#2DBCFF" }
              : discount
              ? { color: "#5B7CFF" }
              : {}
          }
        >
          <strong>{price}</strong> / 월
        </p>
      </div>
    </div>
  );
};

export default ConsultSelectB;
