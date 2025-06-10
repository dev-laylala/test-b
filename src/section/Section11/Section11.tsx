import React from "react";
// import LinkCardA from "../../components/card/LinkCardA";
// import LinkCardB from "../../components/card/LinkCardB";
import "./Section11.scss";
import ConsultCardA from "../../components/consult/ConsultCard/ConsultCardA/ConsultCardA";
import { ConsultCardB } from "../../components/consult";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CounselingField, requestState } from "../../store/RequestStore";
import { useLocalStorage } from "../../shared/utill";

const Section11 = () => {
  const [request, setRequest] = useRecoilState(requestState);
  const [persistedRequest, setPersistedRequest] = useLocalStorage(
    "request",
    request
  );

  const location = useLocation();
  const navigate = useNavigate();

  const selectOption = (counselingType: CounselingField) => {
    setRequest({ ...request, counselingType: counselingType });
    setPersistedRequest(request);
  };

  const appendQueryParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    return `?${searchParams.toString()}`;
  };

  return (
    <section className="section" id="section11">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <img src={require("../../static/icons/link.png")} alt="" />
            결합 서비스
          </div>
          <div className="section-header-title">
            세무서비스부터 법인설립까지
            <br />
            모일수록 커지는 혜택
          </div>
          <div className="section-header-sub">
            전문가와 함께하는 결합 서비스로 안전함과 편리함을 모두 누리세요.
          </div>
        </div>

        <div className="section-content">
          <ConsultCardA
            isLanding={true}
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
          <ConsultCardB
            isLanding={true}
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
          {/* <LinkCardA /> */}
          {/* <LinkCardB /> */}
        </div>
      </div>
    </section>
  );
};

export default Section11;
