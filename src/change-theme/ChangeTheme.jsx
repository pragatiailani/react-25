import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

function ChangeTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <div className="change-theme-container" data-theme={theme}>
      <h1>Click button to change the theme</h1>
      <button onClick={() => handleToggleTheme()}>Change theme</button>
    </div>
  );
}

export default ChangeTheme;
