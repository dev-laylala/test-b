import React, { useEffect, useMemo, useState } from "react";
import "./Section13.scss";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  question: string;
  answer: string;
  index: number;
  selectedIndex: number;
  handleClick: (index: number) => void;
}

const Card = ({
  question,
  answer,
  index,
  selectedIndex,
  handleClick,
}: CardProps) => {
  const isActive = useMemo(
    () => index === selectedIndex,
    [index, selectedIndex]
  );

  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      onClick={() => handleClick(index)}
    >
      <div className="card-head">
        <p className="card-title">{question}</p>
        <div className={isActive ? "arrow-top-icon" : "arrow-bottom-icon"} />
      </div>
      <div
        className="card-sub"
        style={{ maxHeight: isActive ? 300 + "px" : 0 }}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

const Section13 = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const handleCardClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? -1 : index);
  };

  return (
    <section className="section" id="section13">
      <div className="section-inner">
        <div className="section-header">자주 묻는 질문</div>
        <div className="section-content">
          <div className="card-list">
            <Card
              index={0}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="주로 어떤 분들이 비상주사무실을 이용하나요?"
              answer={
                isMobile
                  ? `상주 공간이 필요하지 않은 사업을 영위하시는 대표님들께서 주로 이용하십니다. 
대표적인 업종으로는 전자상거래, 소프트웨어 개발, 디자인, 광고 대행 및 마케팅 분야가 있으며 개인사업자 또는 법인사업자 등록 용도로 이용할 수 있습니다. 
인허가가 필요한 업종 및 상주 공간이 반드시 있어야 하는 일부 업종은 제한될 수 있습니다.`
                  : `상주 공간이 필요하지 않은 사업을 영위하시는 대표님들께서 주로 이용하십니다. 
대표적인 업종으로는 전자상거래, 소프트웨어 개발, 디자인, 광고 대행 및 마케팅 분야가 있으며 개인사업자 또는 법인사업자 등록 용도로 이용할 수 있습니다.  
인허가가 필요한 업종 및 상주 공간이 반드시 있어야 하는 일부 업종은 제한될 수 있습니다.`
              }
            />
            <Card
              index={1}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="비상주사무실이 폐업하면 어떻게 하나요?"
              answer={
                "비상주사무실 폐업 시 사업자 주소를 변경해야 하며, 폐업한 비상주사무실 비용은 환불이 불가할 수 있습니다. 따라서 반드시 비상주사무실의 업력과 신뢰도를 꼼꼼히 확인한 후 계약하는 것을 추천드립니다.\n밸런스 스페이스는 업력 8년 이상의 탄탄한 법인이 전 지점 직영 운영하고 있기 때문에, 폐업 걱정 없이 안전하게 사업을 지속 운영할 수 있습니다."
              }
            />
            <Card
              index={2}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="사업자가 안나오면 어떻게 하죠?"
              answer={
                "비상주사무실로 사업자가 나오지 않는 업종이 있습니다. 따라서 오피스 매니저가 사전 상담을 필수로 진행하며, 사업자가 나오는지 검토 후 결제를 요청합니다. 만약 결제 했는데도 사업자가 나오지 않는다면 100% 환불이 가능하니 안심하시고 이용하셔도 됩니다."
              }
            />
            <Card
              index={3}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="사업자 등록이 처음인데 너무 복잡한 것 같아요"
              answer={
                "밸런스스페이스 이용 고객에 한해 사업자 등록 전문가가 무료로 사업자등록 컨설팅부터 신청까지 대신 도와드리기 때문에 비상주사무실 계약부터 사업자등록까지 간편하게 원스톱으로 처리하실 수 있습니다."
              }
            />
            <Card
              index={4}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="관공서 실사 가능한가요?"
              answer={
                isMobile
                  ? `계약 조건은 비상주사무실로 주소만 임대차를 하는 개념이지만, 실사가 필요할 경우 일정을 미리 말씀 주시면 가능합니다. 단, 실사는 예약제로 제공하고 있습니다.`
                  : `계약 조건은 비상주사무실로 주소만 임대차를 하는 개념이지만,
실사가 필요할 경우 일정을 미리 말씀 주시면 가능합니다. 단, 실사는 예약제로 제공하고 있습니다.`
              }
            />
            <Card
              index={5}
              selectedIndex={selectedIndex}
              handleClick={handleCardClick}
              question="계약 절차는 어떻게 되나요?"
              answer={
                isMobile
                  ? `계약은 비대면 전자 계약으로 진행되어 빠른 업무 처리가 가능합니다. 결제 후 계약 정보를 요청 드리며, 전자 계약서로 바로 공유 드립니다. 또한 방문 상담을 희망하실 경우에도, 언제든지 방문 의사를 말씀 주시면 일정 예약 도와드리겠습니다. 방문일정 예약 없이 내방 시 상담이 불가할 수 있으니 반드시 예약 후 방문 부탁드립니다.`
                  : `계약은 비대면 전자 계약으로 진행되어 빠른 업무 처리가 가능합니다.
결제 후 계약 정보를 요청 드리며, 전자 계약서로 바로 공유 드립니다. 
또한 방문 상담을 희망하실 경우에도, 언제든지 방문 의사를 말씀 주시면 일정 예약 도와드리겠습니다.
방문일정 예약 없이 내방 시 상담이 불가할 수 있으니 반드시 예약 후 방문 부탁드립니다.`
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
