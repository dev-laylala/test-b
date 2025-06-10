import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Header } from "../components/base/Header";
import "./Location.scss";

import MapGangnam from "../components/MapGangnam";
import MapSinnonhyun from "../components/MapSinnonhyun";
import MapSeocho from "../components/MapSeocho";
import MapSongpa from "../components/MapSongpa";
import MapJongro from "../components/MapJongro";
import MapYeongdeungpo from "../components/MapYeongdeungpo";
import MapYongin from "../components/MapYongin";
import MapChungra from "../components/MapChungra";
import MapGwanak from "../components/MapGwanak";

import MapNamyangju from "../components/MapNamyangju";
import MapMapo from "../components/MapMapo";
import MapDaegu from "../components/MapDaegu";

import { ReactComponent as ArrowIcon } from "../static/section12-arrow-icon.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import MapBusan from "../components/MapBusan";
import MapAnsan from "../components/MapAnsan";
import MapSongdo from "../components/MapSongdo";
import MapKimpo from "../components/MapKimpo";
import MapDaejeon from "../components/MapDaejeon";

const Location = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const [value, setValue] = useState("seonleung");
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      setValue(id);
    }
  }, [id]);

  const onClickFranchisee = useCallback(
    (targetName) => (e: React.MouseEvent<HTMLButtonElement>) => {
      setValue(targetName);
      navigate(`/location?id=${targetName}`);
    },
    [value]
  );

  return (
    <>
      <Header />
      <section className="location">
        <div className="section-inner">
          <div className="section-main-title">
            {isMobile ? (
              <h1>
                밸런스 스페이스
                <br /> 위치 안내
              </h1>
            ) : (
              <h1>밸런스 스페이스 위치 안내</h1>
            )}
          </div>
          <div className="content-wrapper">
            <div className="franchisee-select-wrapper">
              <div
                className={value === "seonleung" ? "gangnam-active" : "gangnam"}
              >
                <button onClick={onClickFranchisee("seonleung")}>
                  <div className="gangnam-address">
                    <h3>선릉</h3>
                    {/* <span>서울특별시 강남구 테헤란로70길 12</span> */}
                  </div>
                  {/* <div className="gangnam-feature">
                              <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div
                className={
                  value === "sinnonhyun" ? "sinnonhyun-active" : "sinnonhyun"
                }
              >
                <button onClick={onClickFranchisee("sinnonhyun")}>
                  <div className="sinnonhyun-address">
                    <h3>신논현</h3>
                    {/* <span>서울특별시 강남구 테헤란로70길 12</span> */}
                  </div>
                  {/* <div className="gangnam-feature">
                              <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div className={value === "seocho" ? "seocho-active" : "seocho"}>
                <button onClick={onClickFranchisee("seocho")}>
                  <div className="seocho-address">
                    <h3>서초</h3>
                    {/* <span>서울특별시 강남구 테헤란로70길 12</span> */}
                  </div>
                  {/* <div className="seocho-feature">
                              <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div className={value === "songpa" ? "songpa-active" : "songpa"}>
                <button onClick={onClickFranchisee("songpa")}>
                  <div className="songpa-address">
                    <h3>송파</h3>
                    {/* <span>서울특별시 강남구 테헤란로70길 12</span> */}
                  </div>
                  {/* <div className="songpa-feature">
                              <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div className={value === "jongro" ? "jongro-active" : "jongro"}>
                <button onClick={onClickFranchisee("jongro")}>
                  <div className="jongro-address">
                    <h3>종로</h3>
                    {/* <span>서울특별시 강남구 테헤란로70길 12</span> */}
                  </div>
                  {/* <div className="jongro-feature">
                              <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div className={value === "mapo" ? "jongro-active" : "jongro"}>
                <button onClick={onClickFranchisee("mapo")}>
                  <div className="jongro-address">
                    <h3>마포</h3>
                  </div>
                </button>
              </div>

              <div
                className={
                  value === "yeongdeungpo"
                    ? "yeongdeungpo-active"
                    : "yeongdeungpo"
                }
              >
                <button onClick={onClickFranchisee("yeongdeungpo")}>
                  <div className="yeongdeungpo-address">
                    <h3>영등포</h3>
                    {/* <span>서울특별시 영등포구 국회대로 36길 6-1</span> */}
                  </div>
                  {/* <div className="yeongdeungpo-feature">
                            <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              <div
                className={value === "gwanak" ? "gwanak-active" : "gwanak"}
                style={{ width: 84 }}
              >
                <button onClick={onClickFranchisee("gwanak")}>
                  <div className="gwanak-address">
                    <h3>관악</h3>
                    {/* <span>서울특별시 영등포구 국회대로 36길 6-1</span> */}
                  </div>
                  {/* <div className="yeongdeungpo-feature">
                            <ArrowIcon id='arrow-icon'/>
                          </div> */}
                </button>
              </div>

              {isMobile ? "" : <div className="break"></div>}

              <div
                className={value === "kimpo" ? "chungra-active" : "chungra"}
                style={{ width: 130 }}
              >
                <button onClick={onClickFranchisee("kimpo")}>
                  <div className="chungra-address">
                    <h3>김포</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>

              <div
                className={value === "chungra" ? "chungra-active" : "chungra"}
                style={{ width: 200 }}
              >
                <button onClick={onClickFranchisee("chungra")}>
                  <div className="chungra-address">
                    <h3>인천(청라)</h3>
                    <span>비과밀</span>
                    {/* <span>경기도 용인시 기흥구 강남서로 9</span> */}
                  </div>
                  {/* <div className="yongin-feature">
                          <ArrowIcon id='arrow-icon'/>
                        </div> */}
                </button>
              </div>

              <div
                className={value === "songdo" ? "chungra-active" : "chungra"}
                style={{ width: 180 }}
              >
                <button onClick={onClickFranchisee("songdo")}>
                  <div className="chungra-address">
                    <h3>인천(송도)</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>

              <div
                className={value === "namyangju" ? "chungra-active" : "chungra"}
                style={{ width: 150 }}
              >
                <button onClick={onClickFranchisee("namyangju")}>
                  <div className="chungra-address">
                    <h3>남양주</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>

              {/*<div*/}
              {/*  className={value === "ansan" ? "chungra-active" : "chungra"}*/}
              {/*>*/}
              {/*  <button onClick={onClickFranchisee("ansan")}>*/}
              {/*    <div className="chungra-address">*/}
              {/*      <h3>안산</h3>*/}
              {/*      <span>비과밀</span>*/}
              {/*    </div>*/}
              {/*  </button>*/}
              {/*</div>*/}

              <div className={value === "yongin" ? "yongin-active" : "yongin"}>
                <button onClick={onClickFranchisee("yongin")}>
                  <div className="yongin-address">
                    <h3>용인</h3>
                    <span>비과밀</span>
                    {/* <span>경기도 용인시 기흥구 강남서로 9</span> */}
                  </div>
                  {/* <div className="yongin-feature">
                              <ArrowIcon id='arrow-icon'/>
                            </div> */}
                </button>
              </div>

              <div
                className={value === "daejeon" ? "chungra-active" : "chungra"}
                style={{ width: 130 }}
              >
                <button onClick={onClickFranchisee("daejeon")}>
                  <div className="chungra-address">
                    <h3>대전</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>

              <div
                className={value === "daegu" ? "chungra-active" : "chungra"}
                style={{ width: 130 }}
              >
                <button onClick={onClickFranchisee("daegu")}>
                  <div className="chungra-address">
                    <h3>대구</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>

              <div
                className={value === "busan" ? "chungra-active" : "chungra"}
                style={{ width: 200 }}
              >
                <button onClick={onClickFranchisee("busan")}>
                  <div className="chungra-address">
                    <h3>부산(해운대)</h3>
                    <span>비과밀</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="map-container">
              {value === "seonleung" && <MapGangnam value={value} />}
              {value === "sinnonhyun" && <MapSinnonhyun value={value} />}
              {value === "seocho" && <MapSeocho value={value} />}
              {value === "songpa" && <MapSongpa value={value} />}
              {value === "jongro" && <MapJongro value={value} />}
              {value === "mapo" && <MapMapo value={value} />}
              {value === "yeongdeungpo" && <MapYeongdeungpo value={value} />}
              {value === "yongin" && <MapYongin value={value} />}
              {value === "chungra" && <MapChungra value={value} />}
              {value === "gwanak" && <MapGwanak value={value} />}
              {value === "songdo" && <MapSongdo value={value} />}
              {value === "namyangju" && <MapNamyangju value={value} />}
              {value === "ansan" && <MapAnsan value={value} />}
              {value === "busan" && <MapBusan value={value} />}
              {value === "kimpo" && <MapKimpo value={value} />}
              {value === "daejeon" && <MapDaejeon value={value} />}
              {value === "daegu" && <MapDaegu value={value} />}
            </div>
            <div className="content">
              {value === "seonleung" && (
                <div className="tail">
                  {isMobile ? (
                    <>
                      <div>
                        <p>선릉점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 강남구 테헤란로</h3>
                    </>
                  ) : (
                    <>
                      <h3>선릉점</h3>
                      <div>
                        <p>서울특별시 강남구 테헤란로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "sinnonhyun" && (
                <div className="tail">
                  {isMobile ? (
                    <>
                      <div>
                        <p>신논현점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 강남구 강남대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>신논현점</h3>
                      <div>
                        <p>서울특별시 강남구 강남대로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "seocho" && (
                <div className="tail">
                  {isMobile ? (
                    <>
                      <div>
                        <p>서초점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 서초구 사임당로</h3>
                    </>
                  ) : (
                    <>
                      <h3>서초점</h3>
                      <div>
                        <p>서울특별시 서초구 사임당로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "songpa" && (
                <div className="tail">
                  {isMobile ? (
                    <>
                      <div>
                        <p>송파점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 송파구 중대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>송파점</h3>
                      <div>
                        <p>서울특별시 송파구 중대로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "jongro" && (
                <div className="tail">
                  {isMobile ? (
                    <>
                      <div>
                        <p>종로점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 종로구 대학로</h3>
                    </>
                  ) : (
                    <>
                      <h3>종로점</h3>
                      <div>
                        <p>서울특별시 종로구 대학로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "yeongdeungpo" && (
                <div className="tail2">
                  {isMobile ? (
                    <>
                      <div>
                        <p>영등포점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 영등포구 국회대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>영등포점</h3>
                      <div>
                        <p>서울특별시 영등포구 국회대로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "gwanak" && (
                <div className="tail2">
                  {isMobile ? (
                    <>
                      <div>
                        <p>서울대입구점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>관악구 봉천로</h3>
                    </>
                  ) : (
                    <>
                      <h3>서울대입구점</h3>
                      <div>
                        <p>관악구 봉천로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "yongin" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>용인점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>경기도 용인시 기흥구 강남서로</h3>
                    </>
                  ) : (
                    <>
                      <h3>용인점</h3>
                      <div>
                        <p>경기도 용인시 기흥구 강남서로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "chungra" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>인천(청라)점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>인천광역시 서구 중봉대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>인천(청라)점</h3>
                      <div>
                        <p>인천광역시 서구 중봉대로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "songdo" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>인천(송도)점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>인천광역시 연수구 컨벤시아대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>인천(송도)점</h3>
                      <div>
                        <p>인천광역시 연수구 컨벤시아대로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "ansan" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>안산점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>경기도 안산시 단원구 광덕3로</h3>
                    </>
                  ) : (
                    <>
                      <h3>안산점</h3>
                      <div>
                        <p>경기도 안산시 단원구 광덕3로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "busan" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>부산(해운대)점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>부산광역시 해운대구 대천로</h3>
                    </>
                  ) : (
                    <>
                      <h3>부산(해운대)점</h3>
                      <div>
                        <p>부산광역시 해운대구 대천로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "kimpo" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>김포점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>경기도 김포시 구래동</h3>
                    </>
                  ) : (
                    <>
                      <h3>김포점</h3>
                      <div>
                        <p>경기도 김포시 구래동</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "daejeon" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>대전점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>대전시 유성구 장대로</h3>
                    </>
                  ) : (
                    <>
                      <h3>대전점</h3>
                      <div>
                        <p>대전시 유성구 장대로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "mapo" && (
                <div className="tail2">
                  {isMobile ? (
                    <>
                      <div>
                        <p>마포점</p>
                        <span>중심업무지구</span>
                      </div>
                      <h3>서울특별시 마포구 와우산로</h3>
                    </>
                  ) : (
                    <>
                      <h3>마포점</h3>
                      <div>
                        <p>서울특별시 마포구 와우산로</p>
                        <span>중심업무지구</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "namyangju" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>남양주점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>경기도 남양주시 와부읍 수레로</h3>
                    </>
                  ) : (
                    <>
                      <h3>남양주점</h3>
                      <div>
                        <p>경기도 남양주시 와부읍 수레로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {value === "daegu" && (
                <div className="tail3">
                  {isMobile ? (
                    <>
                      <div>
                        <p>대구점</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                      <h3>대구광역시 중구 명덕로</h3>
                    </>
                  ) : (
                    <>
                      <h3>대구점</h3>
                      <div>
                        <p>대구광역시 중구 명덕로</p>
                        <span>비과밀억제권역 세금 혜택</span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
