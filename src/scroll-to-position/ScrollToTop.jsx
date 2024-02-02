import React from "react";
import "./styles.css";

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button className="scroll-button" onClick={handleScrollToTop}>
      Scroll To Top
    </button>
  );
}

export default ScrollToTop;
