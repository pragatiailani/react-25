import React from "react";
import Tabs from "./Tabs";

function RandomComponent() {
  return <h2>Just a Random Component</h2>;
}

function TabsMain() {
  const tabs = [
    {
      title: "Tab 1",
      content: "Tab 1 content",
    },
    {
      title: "Tab 2",
      content: "Tab 2 content",
    },
    {
      title: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(index) {
    console.log(index);
  }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}

export default TabsMain;
