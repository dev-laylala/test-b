import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { ConsultSelectB, RequestDialog } from "../../components/consult";
import { ReactComponent as ArrowLeft } from "../../static/icons/arrow-left.svg";
import {
  CounselingField,
  requestState,
  UsePeriod,
} from "../../store/RequestStore";
import { useLocalStorage } from "../../shared/utill";
import { useMediaQuery } from "react-responsive";

const Consult2 = () => {
  const [searchParams] = useSearchParams();
  const [request, setRequest] = useRecoilState(requestState);
  const [persistedRequest, setPersistedRequest] = useLocalStorage(
    "request",
    request
  );
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const onOpen = () => {
    setDialogVisible(true);
  };

  useEffect(() => {
    const hasEvent = searchParams.get("has_event") === "true";
    const eventType = searchParams.get("event_type");
    if (hasEvent) {
      let usePeriod = undefined;
      switch (eventType) {
        case "0_12":
          usePeriod = UsePeriod._12;
          break;
        case "0_24":
          usePeriod = UsePeriod._24;
          break;
      }
      setRequest({
        ...request,
        counselingType: CounselingField.DEFAULT,
        usePeriod,
      });
      onOpen();
    }
  });

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq("track", "Optimization2");
    }
  }, []);
  const onClose = () => {
    // document.body.style.overflow = "auto";

    const hasEvent = searchParams.get("has_event") === "true";
    if (hasEvent) {
      const eventType = searchParams.get("event_type");
      const search = location.search.replace(
        /&has_event=true&event_type=(.*)/,
        ""
      );
      switch (eventType) {
        case "0_12":
        case "0_24":
          window.location.href = "https://balancespace-event.co.kr/" + search;
      }
    } else {
      setDialogVisible(false);
    }
  };

  const onSubmitSuccess = useCallback(() => {
    // document.body.style.overflow = "auto";

    const hasEvent = searchParams.get("has_event") === "true";
    if (hasEvent) {
      const eventType = searchParams.get("event_type");
      const search = location.search.replace(
        /&has_event=true&event_type=(.*)/,
        ""
      );
      switch (eventType) {
        case "0_12":
        case "0_24":
          window.location.href = "https://balancespace-event.co.kr/" + search;
      }
    } else {
      navigate(`/${location.search}`);
    }
  }, []);

  const selectOption = (period: UsePeriod) => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // document.body.style.overflow = "hidden";

    const script = document.createElement("script");

    script.type = "text/javascript";
    script.text = `
      var across_adn_complete_contain = new fn_across_adn_contain();
      var across_adn_complete_param = [];
      across_adn_complete_param = {"ut":"Complete","ui":"107325","uo":"types1"};
      across_adn_complete_contain.init(across_adn_complete_param);
    `;

    document.body.appendChild(script);

    setRequest({ ...request, usePeriod: period });
    setPersistedRequest(request);
    onOpen();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    if (dialogVisible)
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [dialogVisible]);

  useEffect(() => {
    const counselingType = searchParams.get("counselingType");
    if (counselingType) {
      setRequest({
        ...request,
        counselingType: counselingType as CounselingField,
      });
    }
  }, [setRequest, request, searchParams]);

  return (
    <div className="consult" id="consult2">
      <div className="consult-content">
        <div className="header-page-title-wrapper">
          <div className="back-button" onClick={() => navigate("/consult")}>
            <ArrowLeft />
          </div>
          <div className="header-page-title">상담 신청</div>
          {isMobile && <div className="dummy"></div>}
        </div>
        {!dialogVisible && (
          <div>
            <h1 className="title-w-subtitle">
              비상주 사무실 이용기간을 선택해주세요
            </h1>
            <div className="subtitle">
              {request.counselingType === "A.비상주+세무"
                ? "결합 A형 세무기장 패키지\n(비상주 사무실 + 세무 서비스)"
                : request.counselingType === "B.비상주+세무+법인설립"
                ? "결합 B형 세무기장 패키지\n(비상주 사무실 + 세무 서비스 + 법인설립)"
                : "비상주 사무실 단독 상품"}
            </div>

            {request.counselingType === "A.비상주+세무" && (
              <div
                className="header-card"
                style={
                  !isMobile
                    ? {
                        transform: "translate(10px, 10px)",
                      }
                    : {
                        transform: "translate(4px, 10px)",
                      }
                }
              >
                <div>비상주 사무실 단독</div>
                <div className="header-card-vertical-divider">|</div>
                <div
                  className="header-card-badge"
                  style={{ background: "#5B7CFF" }}
                >
                  결합 A형
                </div>
              </div>
            )}

            {request.counselingType === "B.비상주+세무+법인설립" && (
              <div
                className="header-card"
                style={
                  !isMobile
                    ? {
                        transform: "translate(0px, 10px)",
                      }
                    : {
                        transform: "translate(4px, 10px)",
                      }
                }
              >
                <div>비상주 사무실 단독</div>
                <div className="header-card-vertical-divider-b">|</div>
                <div
                  className="header-card-badge"
                  style={
                    isMobile
                      ? { background: "#2DBCFF" }
                      : { background: "#2DBCFF", width: "232px" }
                  }
                >
                  결합 B형
                </div>
              </div>
            )}

            <div className="card-outer-wrapper">
              <ul
                className="card-wrapper"
                style={
                  request.counselingType === "B.비상주+세무+법인설립" &&
                  !isMobile
                    ? { width: "400px" }
                    : {}
                }
              >
                <ConsultSelectB
                  title="3개월"
                  price={
                    request.counselingType === CounselingField.DEFAULT
                      ? "60,000원"
                      : "50,000원"
                  }
                  ogPrice={
                    request.counselingType !== CounselingField.DEFAULT
                      ? "60,000원"
                      : ""
                  }
                  onClick={() => selectOption(UsePeriod._3)}
                  type={request.counselingType}
                />
                <ConsultSelectB
                  title="6개월"
                  price={
                    request.counselingType === CounselingField.DEFAULT
                      ? "40,000원"
                      : "30,000원"
                  }
                  ogPrice={
                    request.counselingType !== CounselingField.DEFAULT
                      ? "40,000원"
                      : ""
                  }
                  onClick={() => selectOption(UsePeriod._6)}
                  type={request.counselingType}
                />
                <ConsultSelectB
                  title="12개월"
                  price={
                    request.counselingType === CounselingField.DEFAULT
                      ? "30,000원"
                      : "20,000원"
                  }
                  ogPrice={
                    request.counselingType !== CounselingField.DEFAULT
                      ? "30,000원"
                      : ""
                  }
                  onClick={() => selectOption(UsePeriod._12)}
                  type={request.counselingType}
                />
                <ConsultSelectB
                  title="24개월"
                  price={
                    request.counselingType === CounselingField.DEFAULT
                      ? "25,000원"
                      : "15,000원"
                  }
                  ogPrice={
                    request.counselingType !== CounselingField.DEFAULT
                      ? "25,000원"
                      : ""
                  }
                  onClick={() => selectOption(UsePeriod._24)}
                  type={request.counselingType}
                  // discount
                />
                <ConsultSelectB
                  title="36개월"
                  price={
                    request.counselingType === CounselingField.DEFAULT
                      ? "22,000원"
                      : "12,000원"
                  }
                  ogPrice={
                    request.counselingType !== CounselingField.DEFAULT
                      ? "22,000원"
                      : ""
                  }
                  best
                  onClick={() => selectOption(UsePeriod._36)}
                  type={request.counselingType}
                  // discount
                />
                {request.counselingType === "B.비상주+세무+법인설립" &&
                  isMobile && (
                    <div className="b-special-card-m">
                      <img
                        className="b-card-plus-icon-2"
                        src="/assets/icons/plus2.svg"
                        alt=""
                      />
                      <div className="b-card-content-1-m">
                        {"결합 B형! 법인설립 수수료"}
                      </div>
                      <div className="b-card-content-m-wrapper">
                        <div className="b-card-content-2-m">평균550,000원</div>
                        <div className="b-card-content-3-m">▶</div>
                        <div className="b-card-content-4-m">0원</div>
                      </div>
                    </div>
                  )}
              </ul>
              {request.counselingType === "B.비상주+세무+법인설립" &&
                !isMobile && (
                  <div className="b-special-card">
                    <img
                      className="b-card-plus-icon-1"
                      src="/assets/icons/plus1.svg"
                      alt=""
                    />
                    <div className="b-card-content-1">{"법인설립\n수수료"}</div>
                    <div className="b-card-content-2">0원</div>
                    <div className="b-card-content-3">평균 550,000원</div>
                  </div>
                )}
            </div>
            <div className="ghost-wrapper">
              <p className="ghost">VAT 별도</p>
              <p className="small">선릉점, 신논현점 금액 별도 문의</p>
            </div>

            {request.counselingType !== CounselingField.DEFAULT ? (
              <p className="small">세무기장료 별도 발생</p>
            ) : (
              <></>
            )}

            {/* {request.counselingType === CounselingField.DEFAULT && (
              <div className="discount-ghost-wrapper">
                <ul className="discount-ul">
                  <li className="discount-li">
                    해당 프로모션은 브랜드 사정에 의해 변경될 수 있습니다.
                  </li>
                  <li className="discount-li">
                    비상주 사무실 단독 상품 및 신규고객 한정 프로모션입니다.
                  </li>
                  <li className="discount-li">{`프로모션 관련 문의사항은 '상담신청>문의사항(선택)'에 기재하여 신청 부탁드립니다.`}</li>
                </ul>
              </div>
            )} */}
          </div>
        )}

        <RequestDialog
          visible={dialogVisible}
          onSubmitSuccess={onSubmitSuccess}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Consult2;
