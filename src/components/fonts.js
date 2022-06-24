import React from "react";

export default function Fonts(props) {
  return (
    <div className="main_font">
      <select
        onChange={props.toggleFont}
        name="fontFamily"
        className={`select_font button ${props.darkmode ? "darkmode_select" : ""}`}
      >
        <option value="Cutive Mono" style={{ fontFamily: "Cutive Mono" }}>
          Cutive Mono
        </option>
        <option value="Courgette" style={{ fontFamily: "Nanum Pen Script" }}>
          Courgette
        </option>
        <option
          value="Playfair Display"
          style={{ fontFamily: "Playfair Display" }}
        >
          Playfair Display
        </option>
        <option value="Ubuntu" style={{ fontFamily: "Ubuntu" }}>
          Ubuntu
        </option>
      </select>

      <select
        onChange={props.toggleFont}
        name="fontSize"
        className={`select_font button ${props.darkmode ? "darkmode_select" : ""}`}
        defaultValue={"20"}
      >
        <option value="15">15px</option>
        <option value="20">20px</option>
        <option value="25">25px</option>
        <option value="30">30px</option>
      </select>
    </div>
  );
}
