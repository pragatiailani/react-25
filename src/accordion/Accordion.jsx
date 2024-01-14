import React from "react";
import data from "./data";
import "./styles.css";

function Accordion() {
  const [active, setActive] = React.useState([]);
  const [isSingleAccordion, setIsSingleAccordion] = React.useState(true);

  const toggleAccordion = (index) => {
    if (active.includes(index)) {
      setActive(active.filter((item) => item !== index));
    } else {
      if (isSingleAccordion) {
        setActive([index]);
      } else {
        setActive([...active, index]);
      }
    }
  };

  const toggleAccordionType = () => {
    if (!isSingleAccordion) {
      setActive([]);
    }
    setIsSingleAccordion(!isSingleAccordion);
  };

  return (
    <div className="accordion-main">
      <h1>Accordion</h1>
      <button className="accordion-type-toggle" onClick={toggleAccordionType}>
        change to {isSingleAccordion ? "multiple" : "single"} selection
        accordion
      </button>
      {data.map((dataItem) => (
        <div className="section" key={dataItem.id}>
          <div className="title" onClick={() => toggleAccordion(dataItem.id)}>
            <h2>{dataItem.title}</h2>
            <span>+</span>
          </div>
          {active.includes(dataItem.id) && (
            <div className="section-extend">
              <p>{dataItem.info}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
