import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";

import { Dialog } from "../../components/base";
import {
  ConsultCardA,
  ConsultCardB,
  ConsultSelectA,
} from "../../components/consult";
import "./index.scss";
import { ReactComponent as CloseIcon } from "../../static/icons/close.svg";

import { CounselingField, requestState } from "../../store/RequestStore";
import { useLocalStorage } from "../../shared/utill";

const Consult = () => {
  const [request, setRequest] = useRecoilState(requestState);
  const resetRequest = useResetRecoilState(requestState);
  const [persistedRequest, setPersistedRequest] = useLocalStorage(
    "request",
    request
  );

  const [popupA, setPopupA] = useState(false);
  const [popupB, setPopupB] = useState(false);
  const [active, setActive] = useState("A");
  const [detailDialog, setDetailDialog] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => resetRequest());
  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq("track", "Optimization1");
    }
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const showPopupA = (e: any) => {
    e.preventDefault();
    setPopupA(true);
  };

  const showPopupB = (e: any) => {
    e.preventDefault();
    setPopupB(true);
  };

  const switchActive = (e: any) => {
    e.preventDefault();
    setActive(e.target.id);
  };

  const selectOption = (counselingType: CounselingField) => {
    setRequest({ ...request, counselingType: counselingType });
    setPersistedRequest(request);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const appendQueryParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    return `?${searchParams.toString()}`;
  };

  return (
    <div className="consult consult-1">
      <div className="header-page-title-wrapper">
        <div className="back-button" onClick={() => navigate("/")}>
          <CloseIcon />
        </div>
        {isMobile && <div className="dummy"></div>}
      </div>
      <div className="consult-content">
        <div className="content">
          <h1 className="title">원하시는 상담 분야를 선택해주세요</h1>
          <ul className="card-wrapper">
            <Link
              to={`/consult2${location.search}`}
              onClick={() => selectOption(CounselingField.DEFAULT)}
            >
              <ConsultSelectA title="비상주 사무실" />
            </Link>
            <Link
              to={`/consult2${appendQueryParam(
                "counselingType",
                "A.비상주+세무"
              )}`}
              onClick={() => selectOption(CounselingField.A)}
            >
              <ConsultSelectA
                title="결합 A형"
                desc="(비상주 사무실 + 세무서비스)"
                tags={["추가 할인"]}
                onClick={showPopupA}
              />
            </Link>
            <Link
              to={`/consult2${appendQueryParam(
                "counselingType",
                "B.비상주+세무+법인설립"
              )}`}
              onClick={() => selectOption(CounselingField.B)}
            >
              <ConsultSelectA
                title="결합 B형"
                desc="(비상주 사무실 + 세무서비스 + 법인설립)"
                tags={["추가 할인", "무료 법인설립"]}
                onClick={showPopupB}
              />
            </Link>
          </ul>
          {isMobile ? (
            detailDialog ? (
              <div className="card-container">
                <div className="card-content">
                  <img
                    className="close-button"
                    src={require("../../static/close-button.png")}
                    onClick={() => setDetailDialog(false)}
                    alt=""
                  />
                  <div className="switch-wrapper">
                    <div
                      className={`switch ${active === "A" ? "active" : ""}`}
                      id="A"
                      onClick={switchActive}
                    >
                      결합 A형
                    </div>
                    <div
                      className={`switch ${active === "B" ? "active" : ""}`}
                      id="B"
                      onClick={switchActive}
                    >
                      결합 B형
                    </div>
                  </div>
                  {active === "A" ? (
                    <ConsultCardA
                      onClick={() => {
                        selectOption(CounselingField.A);
                        navigate(
                          `/consult2${appendQueryParam(
                            "counselingType",
                            "A.비상주+세무"
                          )}`
                        );
                      }}
                    />
                  ) : (
                    <ConsultCardB
                      onClick={() => {
                        selectOption(CounselingField.B);
                        navigate(
                          `/consult2${appendQueryParam(
                            "counselingType",
                            "B.비상주+세무+법인설립"
                          )}`
                        );
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              false
            )
          ) : (
            <>
              <Dialog visible={popupA} onClose={() => setPopupA(false)}>
                <ConsultCardA
                  onClose={() => setPopupA(false)}
                  onClick={() => {
                    selectOption(CounselingField.A);
                    navigate(
                      `/consult2${appendQueryParam(
                        "counselingType",
                        "A.비상주+세무"
                      )}`
                    );
                  }}
                />
              </Dialog>
              <Dialog visible={popupB} onClose={() => setPopupB(false)}>
                <ConsultCardB
                  onClose={() => setPopupB(false)}
                  onClick={() => {
                    selectOption(CounselingField.B);
                    navigate(
                      `/consult2${appendQueryParam(
                        "counselingType",
                        "B.비상주+세무+법인설립"
                      )}`
                    );
                  }}
                />
              </Dialog>
            </>
          )}
        </div>
        <a className="detail" onClick={() => setDetailDialog(true)}>
          자세히 알아보기
        </a>
      </div>
    </div>
  );
};

export default Consult;
