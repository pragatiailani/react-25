import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list }) {
  console.log(list)
  return (
    <ul>
      {list && list.length ? list.map((listItem, index) => (
        <MenuItem key={index} listItem={listItem} />
      )): null}
    </ul>
  );
}

export default MenuList;
