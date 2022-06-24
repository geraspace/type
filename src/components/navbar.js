import React from "react";

export default function Navbar(props) {

  return (
    <div className={`main_navbar ${props.darkmode ? "darkmode_navbar" : ""}`}>
      <h1 className="navbar_title typewriter">Type...</h1>
      <h1 className="navbar_rights">By Gera</h1>
    </div>
  );
}