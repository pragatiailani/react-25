import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QRCodeGenerator() {
  const [text, setText] = useState("Pragati Aliani is G.O.A.T.");
  return (
    <div className="qr-code-generator-container">
      <h1>Generate QR Code</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Write here..."/>
      <QRCode value={text} />
    </div>
  );
}

export default QRCodeGenerator;
