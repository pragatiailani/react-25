import React from "react";
import menu from "./data";
import MenuList from "./MenuList";
import "./styles.css";

function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
}

export default TreeView;
