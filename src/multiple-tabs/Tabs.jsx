import React, { useState } from 'react'
import "./styles.css";

function Tabs({ tabsContent, onChange }) {
  
  const [currentTab, setCurrentTab] = useState(0);

  function handleClick(index) {
    setCurrentTab(index);
    onChange(index);
  }

  return (
    <div className='tabs-wrapper'>
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div className={`${index==currentTab? "active" : ""} tab-title`} key={index} onClick={() => handleClick(index)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTab] && tabsContent[currentTab].content}
      </div>
    </div>
  )
}

export default Tabs