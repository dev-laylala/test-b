import React from "react";
import { Link } from "react-router-dom";
import "./Section12.scss";
import { ReactComponent as ArrowIcon } from "../../static/section12-arrow-icon.svg";
import { ReactComponent as ArrowMobileIcon } from "../../static/section12-arrow-mobile-icon.svg";

import { useMediaQuery } from "react-responsive";

const Section12 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section" id="section12">
      <div className="section-inner">
        <div className="franchisee-explanation-wrapper">
          <div className="franchisee-icon-wrapper">
            <img src={require("../../static/location.png")} alt="" />
            <strong>지점 선택</strong>
          </div>
          <h2>
            강남부터 부산까지,
            <br />
            사업에 맞게 원하는 곳으로 선택
          </h2>
          <p>
            {isMobile ? (
              <>
                강남, 서초, 송파 등 서울 중심업무지구부터<br />
                대전, 대구, 부산까지 사업에 맞춰<br />
                지역을 자유롭게 선택하여 이용해보세요.
              </>
            ) : (
              <>
                강남, 서초, 송파 등 서울 중심업무지구부터 대전, 대구, 부산까지 사업에 맞춰<br />
                지역을 자유롭게 선택하여 이용해보세요.
              </>
            )}
          </p>
        </div>

        <div className="franchisee-select-wrapper" style={{ marginBottom: 16 }}>
          <div className="gangnam">
            <Link to="/location?id=seonleung">
              {isMobile ? (
                <>
                  <div className="gangnam-address">
                    <div className="gangnam-feature">
                      <h3 className="flex flex-row">
                        <div>선릉점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 강남구
                      <br />
                      테헤란로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="gangnam-address">
                    <h3 className="flex flex-row">
                      <div>선릉점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 강남구 테헤란로</span>
                    <div className="gangnam-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="sinnonhyun" style={{ marginBottom: 16 }}>
            <Link to="/location?id=sinnonhyun">
              {isMobile ? (
                <>
                  <div className="sinnonhyun-address">
                    <div className="sinnonhyun-feature">
                      <h3 className="flex flex-row">
                        <div>신논현점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 강남구
                      <br />
                      강남대로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="sinnonhyun-address">
                    <h3 className="flex flex-row">
                      <div>신논현점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 강남구 강남대로</span>
                    <div className="sinnonhyun-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="seocho" style={{ marginBottom: 16 }}>
            <Link to="/location?id=seocho">
              {isMobile ? (
                <>
                  <div className="seocho-address">
                    <div className="seocho-feature">
                      <h3 className="flex flex-row">
                        <div>서초점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 서초구
                      <br />
                      사임당로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="seocho-address">
                    <h3 className="flex flex-row">
                      <div>서초점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 서초구 사임당로</span>
                    <div className="seocho-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="songpa" style={{ marginBottom: 16 }}>
            <Link to="/location?id=songpa">
              {isMobile ? (
                <>
                  <div className="songpa-address">
                    <div className="songpa-feature">
                      <h3 className="flex flex-row">
                        <div>송파점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 송파구
                      <br />
                      중대로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="songpa-address">
                    <h3 className="flex flex-row">
                      <div>송파점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 송파구 중대로</span>
                    <div className="songpa-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="jongro" style={{ marginBottom: 16 }}>
            <Link to="/location?id=jongro">
              {isMobile ? (
                <>
                  <div className="jongro-address">
                    <div className="jongro-feature">
                      <h3 className="flex flex-row">
                        <div>종로점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 종로구
                      <br />
                      대학로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="jongro-address">
                    <h3 className="flex flex-row">
                      <div>종로점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 종로구 대학로</span>
                    <div className="jongro-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="jongro" style={{ marginBottom: 16 }}>
            <Link to="/location?id=mapo">
              {isMobile ? (
                <>
                  <div className="jongro-address">
                    <div className="jongro-feature">
                      <h3 className="flex flex-row">
                        <div>마포점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 마포구
                      <br />
                      와우산로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="jongro-address">
                    <h3 className="flex flex-row">
                      <div>마포점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 마포구 와우산로</span>
                    <div className="jongro-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yeongdeungpo" style={{ marginBottom: 16 }}>
            <Link to="/location?id=yeongdeungpo">
              {isMobile ? (
                <>
                  <div className="yeongdeungpo-address">
                    <div className="yeongdeungpo-feature">
                      <h3 className="flex flex-row">
                        <div>영등포점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>
                      서울특별시 영등포구
                      <br />
                      국회대로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yeongdeungpo-address">
                    <h3 className="flex flex-row">
                      <div>영등포점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 영등포구 국회대로</span>
                    <div className="yeongdeungpo-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="gwanak" style={{ marginBottom: 16 }}>
            <Link to="/location?id=gwanak">
              {isMobile ? (
                <>
                  <div className="gwanak-address">
                    <div className="gwanak-feature">
                      <h3 className="flex flex-row">
                        <div>관악점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>중심업무지구</strong>
                    </div>
                    <span>서울특별시 관악구 봉천로</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="gwanak-address">
                    <h3 className="flex flex-row">
                      <div>관악점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>서울특별시 관악구 봉천로</span>
                    <div className="gwanak-feature">
                      <span>중심업무지구</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=kimpo">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div>김포점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>경기도 김포시 구래동</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>김포점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>경기도 김포시 구래동</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=namyangju">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div>남양주점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>
                      경기도 남양주시
                      <br />
                      와부읍 수레로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>남양주점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>경기도 남양주시 와부읍 수레로</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=yongin">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div>용인점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>비과밀억제권역</strong>
                    </div>
                    <span>
                      경기도 용인시 기흥구
                      <br />
                      강남서로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>용인점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>경기도 용인시 기흥구 강남서로</span>
                    <div className="yongin-feature">
                      <span>비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=daejeon">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div>대전점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>대전시 유성구 장대로</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>대전점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>대전시 유성구 장대로</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="chungra">
            <Link to="/location?id=chungra">
              {isMobile ? (
                <>
                  <div className="chungra-address">
                    <div className="chungra-feature">
                      <h3 className="flex flex-row">
                        <div>인천(청라)점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong>비과밀억제권역</strong>
                    </div>
                    <span>
                      인천광역시 서구
                      <br />
                      중봉대로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="chungra-address">
                    <h3 className="flex flex-row">
                      <div>인천(청라)점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>인천광역시 서구 중봉대로</span>
                    <div className="chungra-feature">
                      <span>비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=songdo">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div>인천(송도)점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>
                      인천광역시 연수구 <br />
                      컨벤시아대로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>인천(송도)점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>인천광역시 연수구 컨벤시아대로</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          {/*<div className="gwanak">*/}
          {/*  <Link to="/location?id=ansan">*/}
          {/*    {isMobile ? (*/}
          {/*      <>*/}
          {/*        <div className="gwanak-address">*/}
          {/*          <div className="gwanak-feature">*/}
          {/*            <h3>*/}
          {/*              안산점 <ArrowMobileIcon id="arrow-icon" />*/}
          {/*            </h3>*/}
          {/*            <strong className="tax-benefit">세제혜택지역</strong>*/}
          {/*          </div>*/}
          {/*          <span>*/}
          {/*            경기도 안산시 <br />*/}
          {/*            단원구 광덕3로*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*      </>*/}
          {/*    ) : (*/}
          {/*      <>*/}
          {/*        <div className="gwanak-address">*/}
          {/*          <h3>*/}
          {/*            안산점*/}
          {/*            <ArrowIcon className="my-auto" id="arrow-icon" />*/}
          {/*          </h3>*/}
          {/*          <span>경기도 안산시 단원구 광덕3로</span>*/}
          {/*          <div className="gwanak-feature">*/}
          {/*            <span className="tax-benefit">세제혜택지역</span>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </>*/}
          {/*    )}*/}
          {/*  </Link>*/}
          {/*</div>*/}

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=busan">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div className="text-[17px]">부산(해운대)점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>
                      부산광역시 해운대구 <br />
                      대천로
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>부산(해운대)점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>부산광역시 해운대구 대천로</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="yongin" style={{ marginBottom: 16 }}>
            <Link to="/location?id=daegu">
              {isMobile ? (
                <>
                  <div className="yongin-address">
                    <div className="yongin-feature">
                      <h3 className="flex flex-row">
                        <div className="text-[17px]">대구점</div>
                        <ArrowMobileIcon id="arrow-icon" />
                      </h3>
                      <strong className="tax-benefit">비과밀억제권역</strong>
                    </div>
                    <span>대구광역시 중구 명덕로</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="yongin-address">
                    <h3 className="flex flex-row">
                      <div>대구점</div>
                      <ArrowIcon className="my-auto" id="arrow-icon" />
                    </h3>
                    <span>대구광역시 중구 명덕로</span>
                    <div className="yongin-feature">
                      <span className="tax-benefit">비과밀억제권역</span>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
