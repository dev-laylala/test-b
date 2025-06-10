import React, { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal: React.FC = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        duration: 500,
        easing: "ease-in",
        origin: "top",
        delay: 100,
      });
  }, []);

  return <div ref={sectionRef}>{children}</div>;
};

export default ScrollReveal;
