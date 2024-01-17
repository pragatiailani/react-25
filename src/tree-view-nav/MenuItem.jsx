import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaPlus, FaMinus} from "react-icons/fa";

function MenuItem({ listItem }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{listItem.label}</p>
        {listItem && listItem.children && listItem.children.length > 0 ? (
          <span
            onClick={() => handleToggleChildren(listItem.label)}
          >{
            displayCurrentChildren[listItem.label] ? <FaMinus/> : <FaPlus/>
          }
          </span>
        ) : null}
      </div>
      {listItem && listItem.children && listItem.children.length > 0 && displayCurrentChildren[listItem.label] ? (
        <MenuList list={listItem.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
