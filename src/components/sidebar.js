import React from "react";

export default function Sidebar(props) {
  return (
    <div className="main_sidebar">
      <button
        onClick={props.saveText}
        className={`button ${props.darkmode ? "darkmode_icon" : ""}`}
      >
        <span className="material-symbols-outlined">save</span>
      </button>
      <div className="uploadText">
        <label
          htmlFor="file-input"
          className={`button ${props.darkmode ? "darkmode_icon" : ""}`}
        >
          <span className="material-symbols-outlined">upload_file</span>
        </label>
        <input onChange={props.uploadText} id="file-input" type={"file"} />
      </div>
      <button
        onClick={props.downloadImage}
        className={`button ${props.darkmode ? "darkmode_icon" : ""}`}
      >
        <span className="material-symbols-outlined">image</span>
      </button>
    </div>
  );
}
