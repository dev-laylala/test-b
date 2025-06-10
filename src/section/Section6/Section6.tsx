import React, { useEffect, useState } from "react";
import "./Section6.scss";
import { useMediaQuery } from "react-responsive";

const Section6 = () => {
  const [effect, setEffect] = useState<React.CSSProperties>({
    transform: `translate3d(0%, 0px, 0px)`,
  });
  const [effect2, setEffect2] = useState<React.CSSProperties>({
    transform: `translate3d(0%, 0px, 0px)`,
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  useEffect(() => {
    function onScroll() {
      const startY = 3800;

      if (window.scrollY >= startY) {
        const scroll: any = window.scrollY - startY;
        const interpolate = 314 / 100;

        setEffect({
          transform: `translate3d(-${parseInt(scroll) * 0.2}%, 0px, 0px)`,
        });
        setEffect2({
          transform: `translate3d(${parseInt(scroll) * 0.2}%, 0px, 0px)`,
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section" id="section6">
      <div className="effect" style={effect} />
      <div className="effect" style={effect2} />
      <div className="section-inner">
        {isMobile ? (
          <>
            오직,
            <br />
            밸런스 스페이스에서만
            <br />
            제공하는 <span className="gradient-text gradient">Benefit</span>
            <br />
            서비스를 만나보세요
          </>
        ) : (
          <>
            오직, 밸런스 스페이스에서만 제공하는 <br />
            <span className="gradient-text gradient">Benefit</span> 서비스를
            만나보세요
          </>
        )}
      </div>
    </section>
  );
};

export default Section6;
