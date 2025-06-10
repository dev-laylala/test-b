import React, { useEffect, useState } from "react";
import "./SectionVideo.scss";

import { useMediaQuery } from "react-responsive";
import ReactPlayer from "react-player";

import { ReactComponent as PlayIcon } from "../../static/video_section/play.svg";
import { ReactComponent as PlayIconHover } from "../../static/video_section/play-hover.svg";
import { ReactComponent as ArrowLeft } from "../../static/video_section/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../static/video_section/arrow-right.svg";
import { ReactComponent as Close } from "../../static/video_section/close.svg";
import { useWindowDimensions } from "../../hooks/WindowDimension";

const SectionVideo = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const sectionData = [
    {
      isMobile: isMobile,
      className:
        "col-span-2 mx-auto 1200:w-[1080px] 800:w-[756px] 800r:w-[335px] 1200:h-[504px] 800:h-[352px] 800r:h-[400px]",
      colSpan: 2,
      mobile_only_thumbnail_png:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_1_png.png",
      mobile_only_thumbnail_webp:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_1_webp.webp",
      thumbnail_pc_png:
        "/assets/video_section/thumbnails/thumbnail_1_pc_png.png",
      thumbnail_pc_webp:
        "/assets/video_section/thumbnails/thumbnail_1_pc_webp.webp",
      thumbnail_mobile_png:
        "/assets/video_section/thumbnails/thumbnail_1_mobile_png.png",
      thumbnail_mobile_webp:
        "/assets/video_section/thumbnails/thumbnail_1_mobile_webp.webp",
      video_pc_mp4: "/assets/video_section/videos/video_1_pc_mp4.mp4",
      video_pc_webm: "/assets/video_section/videos/video_1_pc_webm.webm",
      video_mobile_mp4: "/assets/video_section/videos/video_1_mobile_mp4.mp4",
      video_mobile_webm:
        "/assets/video_section/videos/video_1_mobile_webm.webm",
      youtube_url: "https://youtu.be/c6uP2R9NNa4?si=lJSdVz6c6aEeZT51",
      text_contents: [
        "유튜브 채널 운영",
        "친절하고 자세하게 알려줘서\n초짜 프리랜서들에게 추천!",
        "스토리유토피아 | 김기현 대표님",
      ],
    },
    {
      isMobile: isMobile,
      className:
        "col-span-2 mx-auto 1200:w-[1080px] 800:w-[756px] 800r:w-[335px] 1200:h-[504px] 800:h-[352px] 800r:h-[400px]",
      colSpan: 2,
      mobile_only_thumbnail_png:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_2_png.png",
      mobile_only_thumbnail_webp:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_2_webp.webp",
      thumbnail_pc_png:
        "/assets/video_section/thumbnails/thumbnail_2_pc_png.png",
      thumbnail_pc_webp:
        "/assets/video_section/thumbnails/thumbnail_2_pc_webp.webp",
      thumbnail_mobile_png:
        "/assets/video_section/thumbnails/thumbnail_2_mobile_png.png",
      thumbnail_mobile_webp:
        "/assets/video_section/thumbnails/thumbnail_2_mobile_webp.webp",
      video_pc_mp4: "/assets/video_section/videos/video_2_pc_mp4.mp4",
      video_pc_webm: "/assets/video_section/videos/video_2_pc_webm.webm",
      video_mobile_mp4: "/assets/video_section/videos/video_2_mobile_mp4.mp4",
      video_mobile_webm:
        "/assets/video_section/videos/video_2_mobile_webm.webm",
      youtube_url: "https://youtu.be/KNLNGm2HvyY?si=42WfPHqm3FaIxLza",
      text_contents: [
        "영상 편집 및 촬영",
        "온라인으로 간편하게 계약하고,\n사업자등록도 하루 만에 빠르게!",
        "혜민웨이 | 이혜민 대표님",
      ],
    },
    {
      isMobile: isMobile,
      className:
        "800:col-span-1 800r:col-span-2 800:ml-auto 800r:mx-auto 1200:w-[528px] 800:w-[369px] 800r:w-[335px] 1200:h-[504px] 800:h-[352px] 800r:h-[400px]",
      colSpan: 1,
      mobile_only_thumbnail_png:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_3_png.png",
      mobile_only_thumbnail_webp:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_3_webp.webp",
      thumbnail_pc_png:
        "/assets/video_section/thumbnails/thumbnail_3_pc_png.png",
      thumbnail_pc_webp:
        "/assets/video_section/thumbnails/thumbnail_3_pc_webp.webp",
      thumbnail_mobile_png:
        "/assets/video_section/thumbnails/thumbnail_3_mobile_png.png",
      thumbnail_mobile_webp:
        "/assets/video_section/thumbnails/thumbnail_3_mobile_webp.webp",
      video_pc_mp4: "/assets/video_section/videos/video_3_pc_mp4.mp4",
      video_pc_webm: "/assets/video_section/videos/video_3_pc_webm.webm",
      video_mobile_mp4: "/assets/video_section/videos/video_3_mobile_mp4.mp4",
      video_mobile_webm:
        "/assets/video_section/videos/video_3_mobile_webm.webm",
      youtube_url: "https://youtu.be/1f2SpzW1dIU?si=u-J8pUi97W_Gjkj7",
      text_contents: [
        "소프트웨어 개발 및 판매",
        "비상주 사무실 뿐만 아니라\n세무기장까지 한 번에 해결!",
        "위아더커스터머 | 편진성 대표님",
      ],
    },
    {
      isMobile: isMobile,
      className:
        "800:col-span-1 800r:col-span-2 800:mr-auto 800r:mx-auto 1200:w-[528px] 800:w-[369px] 800r:w-[335px] 1200:h-[504px] 800:h-[352px] 800r:h-[400px]",
      colSpan: 1,
      mobile_only_thumbnail_png:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_4_png.png",
      mobile_only_thumbnail_webp:
        "/assets/video_section/thumbnails/mobile_only_thumbnail_4_webp.webp",
      thumbnail_pc_png:
        "/assets/video_section/thumbnails/thumbnail_4_pc_png.png",
      thumbnail_pc_webp:
        "/assets/video_section/thumbnails/thumbnail_4_pc_webp.webp",
      thumbnail_mobile_png:
        "/assets/video_section/thumbnails/thumbnail_4_mobile_png.png",
      thumbnail_mobile_webp:
        "/assets/video_section/thumbnails/thumbnail_4_mobile_webp.webp",
      video_pc_mp4: "/assets/video_section/videos/video_4_pc_mp4.mp4",
      video_pc_webm: "/assets/video_section/videos/video_4_pc_webm.webm",
      video_mobile_mp4: "/assets/video_section/videos/video_4_mobile_mp4.mp4",
      video_mobile_webm:
        "/assets/video_section/videos/video_4_mobile_webm.webm",
      youtube_url: "https://youtu.be/rR4pYM-l1aw?si=VASITUgygxL4sPIm",
      text_contents: [
        "전자상거래",
        "전문 세무사로 안심되고\n정확한데 저렴하기까지!",
        "올뉴피씨 | 김민수 대표님",
      ],
    },
  ];

  return (
    <div className="section" id="section2_3">
      <div className="sec2_3-header">
        <h5>
          <span>밸런스스페이스</span>
          <br />
          비상주사무실 솔직 후기
        </h5>
        <div className="text-[#838a9a] font-medium 1200:text-[20px] 1200:leading-[32px] 1200r:text-[16px] 1200r:leading-[25px]">
          다른 사장님들의 진짜 후기를 만나보세요!
        </div>
      </div>

      {/* styled with tailwindcss */}
      <div className="grid grid-cols-2 800:gap-[24px] 800r:gap-[16px]">
        {sectionData.map((d, i) => (
          <VideoComponent idx={i} data={d} sectionData={sectionData} />
        ))}
      </div>
    </div>
  );
};

interface videoData {
  isMobile: boolean;
  className: string;
  colSpan: number;
  mobile_only_thumbnail_png: string;
  mobile_only_thumbnail_webp: string;
  thumbnail_pc_png: string;
  thumbnail_pc_webp: string;
  thumbnail_mobile_png: string;
  thumbnail_mobile_webp: string;
  video_pc_mp4: string;
  video_pc_webm: string;
  video_mobile_mp4: string;
  video_mobile_webm: string;
  youtube_url: string;
  text_contents: string[];
}

interface VideoComponentProps {
  idx: number;
  data: videoData;
  sectionData: videoData[];
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  idx,
  data,
  sectionData,
}) => {
  const [hover, setHover] = useState(false);
  const [renderVideo, setRenderVideo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currDataIdx, setCurrDataIdx] = useState(idx);
  const [showVideo, setShowVideo] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setShowVideo(false);
    setShowVideo(true);
  }, [currDataIdx]);

  const wait = (ms: any) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      if (hover) {
        setRenderVideo(true);
      } else {
        // await wait(2000);
        if (hover) setRenderVideo(true);
        else setRenderVideo(false);
      }
    })();

    return () => {
      abortController.abort();
      if (hover) setRenderVideo(true);
      else setRenderVideo(false);
    };
  }, [hover]);

  const handleClick = () => {
    if (!showPopup) {
      // document.body.style.overflow = "hidden";
      setShowPopup(true);
      setShowVideo(true);
    } else {
      // document.body.style.overflow = "auto";
      setShowPopup(false);
      setShowVideo(false);
    }
  };

  const handleClickLeft = () => {
    if (currDataIdx === 0) {
      setCurrDataIdx(3);
    } else {
      setCurrDataIdx(currDataIdx - 1);
    }
  };

  const handleClickRight = () => {
    if (currDataIdx === 3) {
      setCurrDataIdx(0);
    } else {
      setCurrDataIdx(currDataIdx + 1);
    }
  };

  return (
    <div className={`${data.className} relative`}>
      {/* popup */}
      <div
        className={`${
          showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed top-0 left-0 duration-200 w-screen h-screen bg-[#2B2B2D]/80 flex z-[10]`}
      >
        <div
          className="fixed top-0 left-0 w-screen h-screen cursor-pointer"
          onClick={handleClick}
        />
        <div
          style={{
            width: width <= 1280 ? height * 1.5 : "100%",
            maxHeight: width <= 1280 ? height * 0.9 : "auto",
          }}
          className="my-auto mx-auto flex flex-row 800:px-[24px] 800r:translate-y-[-50px]"
        >
          <ArrowLeft
            className={`hover:scale-[1.06] duration-200 800r:hidden z-[3] my-auto mr-[28px] ml-auto cursor-pointer 1200:min-w-[60px] 800:min-w-[32px] 800:max-w-[32px]`}
            onClick={handleClickLeft}
          />
          <div
            className={`z-[3] w-full h-full max-w-[1080px] 800:bg-white 800r:bg-none @1400:rounded-[56px] 800:rounded-[20px] flex flex-col @1400:p-[64px] 800:p-[32px]`}
          >
            <div className="flex flex-row">
              <div className="text-left mr-auto 800r:hidden">
                <div className="rounded-full bg-[#5D73FF]/20 text-[#5D73FF] font-bold @1400:text-[18px] 800:text-[13px] @1400:leading-[28px] py-[4px] px-[14px] max-w-fit">
                  {sectionData[currDataIdx].text_contents[0]}
                </div>
                <div className="text-[#454F5D] font-bold @1400:text-[28px] 800:text-[18px] @1400:leading-[40px] 800:leading-[26px] 800:tracking-[-0.5px] @1400:mt-[16px] 800:mt-[10px]">
                  {sectionData[currDataIdx].text_contents[1]}
                </div>
                <div className="text-[#6A7585] font-medium @1400:text-[20px] 800:text-[13px] @1400:leading-[32px] mt-[6px]">
                  {sectionData[currDataIdx].text_contents[2]}
                </div>
              </div>
              <div
                className="800r:ml-auto 800r:mb-[8px] 800r:mr-[8px]"
                onClick={handleClick}
              >
                <Close className="cursor-pointer 1200r:w-[32px]" />
              </div>
            </div>
            <div className="w-full @1400:mt-[32px] 800:mt-[20px] 1400:rounded-[30px] 1200:rounded-[20px] 800:rounded-[20px] 800r:rounded-none overflow-hidden">
              {showVideo && (
                <div className="aspect-video rounded-[20px] z-[10] 800:bg-white 800r:bg-none relative">
                  <ReactPlayer
                    controls
                    url={sectionData[currDataIdx].youtube_url}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              )}
            </div>
          </div>
          <ArrowRight
            className={`hover:scale-[1.06] duration-200 800r:hidden z-[3] my-auto ml-[28px] mr-auto cursor-pointer 1200:min-w-[60px] 800:min-w-[32px] 800:max-w-[32px]`}
            onClick={handleClickRight}
          />
        </div>
      </div>
      <div
        className={`${hover ? "scale-[1.01]" : ""} duration-[400ms] relative ${
          data.className
        }`}
      >
        <div
          className={`${
            hover ? "opacity-100" : "opacity-0"
          } duration-[600ms] delay-[400ms] ease-in absolute z-[4] 1200:right-[36px] 800:right-[24px] 1200:top-[36px] 800:top-[24px] 800r:right-[22px] 800r:top-[22px] pointer-events-none`}
        >
          <PlayIconHover className="1200:w-[80px] 1200:h-[80px] 800:w-[46px] 800:h-[46px] 800r:w-[46px] 800r:h-[46px]" />
        </div>
        <div
          className={`${
            hover ? "opacity-0" : "opacity-100"
          } duration-[600ms] delay-[400ms] ease-in absolute z-[4] 1200:right-[36px] 800:right-[24px] 1200:top-[36px] 800:top-[24px] 800r:right-[22px] 800r:top-[22px] pointer-events-none`}
        >
          <PlayIcon className="1200:w-[80px] 1200:h-[80px] 800:w-[46px] 800:h-[46px] 800r:w-[46px] 800r:h-[46px]" />
        </div>
        <div
          className={
            width < 800
              ? `absolute z-[4] pointer-events-none opacity-85 bg-white rounded-[26px] w-[270px] h-[146px] flex flex-col py-[18px] px-[20px] text-left translate-x-1/2 right-1/2 bottom-[22px]`
              : `${hover ? "" : "opacity-85"} ${
                  data.colSpan === 1
                    ? "translate-x-1/2 right-1/2 800:bottom-[24px]"
                    : `${
                        idx === 1
                          ? "1200:left-[36px] 800:left-[24px]"
                          : "1200:right-[36px] 800:right-[24px]"
                      } 1200:bottom-[36px] 800:bottom-[24px]`
                } duration-[600ms] delay-[400ms] ease-in absolute z-[4] pointer-events-none bg-white rounded-[26px] 1200:w-[456px] 1200:h-[220px] 1200r:w-[270px] 1200r:h-[146px] flex flex-col 1200:py-[32px] 1200:px-[40px] 1200r:py-[18px] 1200r:px-[20px] text-left`
          }
        >
          <div className="rounded-full bg-[#5D73FF]/20 text-[#5D73FF] font-bold 1200:text-[18px] 1200r:text-[13px] 1200:leading-[28px] py-[4px] px-[14px] max-w-fit">
            {data.text_contents[0]}
          </div>
          <div className="text-[#454F5D] font-bold 1200:text-[28px] 1200r:text-[18px] 1200:leading-[40px] 1200r:leading-[26px] 1200r:tracking-[-0.5px] 1200:mt-[10px] 800:mt-[10px] 800r:mt-[8px]">
            {data.text_contents[1]}
          </div>
          <div className="text-[#6A7585] font-medium 1200:text-[20px] 1200r:text-[13px] 1200:leading-[32px] mt-[6px]">
            {data.text_contents[2]}
          </div>
        </div>
        {/* video */}
        {renderVideo && (
          <div
            className={`absolute w-full h-full duration-[600ms] z-[3] pointer-events-none`}
          >
            <video
              autoPlay
              loop
              muted
              className={`${
                hover ? "" : "opacity-0"
              } duration-[600ms] delay-[400ms] ease-in z-[3] object-cover rounded-[30px] w-full h-full pointer-events-none`}
            >
              <source
                src={data.isMobile ? data.video_mobile_mp4 : data.video_pc_mp4}
                type="video/webm"
              />
              <source
                src={data.isMobile ? data.video_mobile_mp4 : data.video_pc_mp4}
                type="video/mp4"
              />
            </video>
          </div>
        )}

        {/* thumbnail */}
        <div
          className={`800r:hidden ${
            hover ? "duration-[600ms] delay-[400ms] ease-in opacity-0" : ""
          } absolute z-[2]`}
        >
          <picture>
            <source
              srcSet={
                data.isMobile
                  ? data.thumbnail_mobile_png
                  : data.thumbnail_pc_png
              }
            />
            <img
              className="rounded-[30px] cursor-pointer"
              src={
                data.isMobile
                  ? data.thumbnail_mobile_png
                  : data.thumbnail_pc_png
              }
              onMouseEnter={async () => {
                setRenderVideo(true);
                await wait(100);
                setHover(true);
              }}
              onMouseLeave={() => setHover(false)}
              onClick={handleClick}
              alt="thumbnail"
            />
          </picture>
        </div>
        <div className={`800:hidden absolute z-[2]`}>
          <picture>
            <source srcSet={data.mobile_only_thumbnail_png} />
            <img
              className="rounded-[30px] cursor-pointer"
              src={data.mobile_only_thumbnail_png}
              onClick={handleClick}
              alt="thumbnail"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SectionVideo;
