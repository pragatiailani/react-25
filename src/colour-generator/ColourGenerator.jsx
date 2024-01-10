import React from "react";
import "./styles.css";

function ColourGenerator() {
  const [colour, setColour] = React.useState("#123123");
  const [colourType, setColourType] = React.useState("hex");

  const generateRandomHex = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    setColour(`#${randomHex}`);
  };
  const generateRandomRGB = () => {
    const randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setColour(randomRGB);
  };

  return (
    <div className="colour-generator-main" style={{ background: colour }}>
      <h1>ColourGenerator</h1>
      <button onClick={generateRandomHex}>Generate Random Hex Colour</button>
      <button onClick={generateRandomRGB}>Generate Random RGB Colour</button>
      <div id="colour">{colour}</div>
    </div>
  );
}

export default ColourGenerator;
