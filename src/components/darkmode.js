import React from "react";

export default function Darkmode(props) {
  return (
    <div className="main_darkmode">
      <button
        style={{
          color: `${props.darkmode ? "yellow" : "black"}`
        }}
        className={"button"}
      >
        <span
          onClick={props.toggleDarkMode}
          className="material-symbols-outlined"
        >
          {props.darkmode ? "light_mode" : "dark_mode"}
        </span>
      </button>
    </div>
  );
}
