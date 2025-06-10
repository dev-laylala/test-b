import React, { useEffect } from "react";
import { Header } from "../components/base/Header";
import { Footer } from "../components/base/Footer";
import {
  Section1,
  Section10,
  Section11,
  Section12,
  Section13,
  Section2,
  Section2_2,
  Section2_3,
  Section3,
  Section4,
  Section5,
  Section6,
  Section8,
  Section9,
} from "../section";
import FloatButton from "../components/base/FloatButton/FloatButton";
import Benefit1 from "../section/benefit/Benefit1/Benefit1";
import Benefit2 from "../section/benefit/Benefit2/Benefit2";
import Benefit3 from "../section/benefit/Benefit3/Benefit3";
import ChannelService from "./channel-talk/ChannelService";
import { withHome } from "../shared/WithHome";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SectionVideo from "../section/section_video/SectionVideo";
import SalePopup from "../components/popup/SalePopup/SalePopup2";

export interface LinkItem {
  title: string;
  callback: (history?: any) => void;
  isLast?: boolean;
}

const SECTION_LIST = [
  "offer",
  "benefits",
  "price",
  "manual",
  "union",
  "franchisee",
];

const Main = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const hasEvent = searchParams.get("has_event") === "true";
    if (hasEvent) {
      navigate("/consult2" + location.search);
    }
  });

  return (
    <>
      {/* <SalePopup /> */}
      <FloatButton />
      <Header />
      <Section1 />
      {/* <Section2 /> */}
      <Section2_2 />
      {/* <Section2_3/> */}
      <SectionVideo />
      <Section3 />
      <Section4 />
      {/* <div id="offer">
        <Section5 />
      </div> */}
      <Section6 />
      <div id="benefits">
        {/* <Benefit1 /> */}
        <Benefit2 />
        {/* <Benefit3 /> */}
      </div>
      <div id="price">
        <Section8 />
      </div>
      <div id="manual">
        <Section9 />
      </div>
      <div id="union">
        <Section11 />
      </div>
      <div id="franchisee">
        <Section12 />
      </div>
      <Section2_3 />
      <Section13 />
      <Section10 />
      <Footer />
    </>
  );
};

export default withHome(Main, SECTION_LIST);
