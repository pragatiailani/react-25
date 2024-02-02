import React from "react";
import "./styles.css";

function ScrollToBottom() {
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <button className="scroll-button" onClick={handleScrollToBottom}>
      Scroll To Bottom
    </button>
  );
}

export default ScrollToBottom;
