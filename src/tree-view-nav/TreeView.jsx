import React from "react";
import menu from "./data";
import MenuList from "./MenuList";

function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
}

export default TreeView;
