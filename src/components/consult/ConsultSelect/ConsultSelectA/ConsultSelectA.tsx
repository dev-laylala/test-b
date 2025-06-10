import React from "react";
import { useMediaQuery } from "react-responsive";
import "../ConsultSelect.scss";
import "./ConsultSelectA.scss";

interface ConsultSelectAProps {
  title: string;
  desc?: string;
  tags?: string[];
  onClick?: any;
}

const ConsultSelectA = ({
  title,
  desc,
  tags = [],
  onClick,
}: ConsultSelectAProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return isMobile ? (
    <div className="consult-select small" id="type-a">
      <div className="inner small">
        <div className="title">{title}</div>
        <div className="tag-wrapper">
          {tags.map((tag, i) => (
            <div key={i} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
      {desc && <div className="desc">{desc}</div>}
    </div>
  ) : (
    <div className="consult-select" id="type-a">
      <div className="inner">
        <div className="title">{title}</div>
        {desc && <div className="desc">{desc}</div>}
      </div>
      <div className="tag-wrapper">
        {tags.map((tag, i) => (
          <div key={i} className="tag">
            {tag}
          </div>
        ))}
      </div>
      {onClick && (
        <button className="more" onClick={onClick}>
          자세히 알아보기
        </button>
      )}
    </div>
  );
};

export default ConsultSelectA;
