import React from "react";
import Sidebar from "./sidebar";
import Darkmode from "./darkmode";
import Fonts from "./fonts";
import { useState } from "react";
import { saveAs } from "file-saver";
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

export default function Canvas(props) {

  // FUNCTION TO DOWNLOAD IMAGE
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
 
    // download image
    const link = document.createElement('a');
    link.download = "Text.png";
    link.href = dataUrl;
    link.click();
}

  // FONT STATE
  const [font, setFont] = useState({
    fontFamily: "Cutive Mono",
    fontSize: "20",
  });

  function toggleFont(event) {
    const { name, value } = event.target;
    setFont((prevFont) => {
      return {
        ...prevFont,
        [name]: value,
      };
    });
  }

  // TEXTAREA STATE
  const [textArea, setTextArea] = useState("");
  function funcTextArea(event) {
    setTextArea(event.target.value);
  }

  // FUNCTION TO DOWNLOAD TEXT
  function saveText() {
    const blob = new Blob([textArea], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "file.txt");
  }

  // FUNCTION TO UPLOAD .TXT
  function uploadText(event) {
    const file = event.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = () => {
      console.log("Hi");
      console.log(fileReader.result);
      setTextArea(fileReader.result);
    };

    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
  }

  return (
    <div className={`canvas_container ${props.darkmode ? "darkmode" : ""}`}>
      <Sidebar
        darkmode={props.darkmode}
        saveText={saveText}
        uploadText={uploadText}
        downloadImage={downloadImage}
        domel={domEl}
      />
      <Darkmode
        toggleDarkMode={props.toggleDarkMode}
        darkmode={props.darkmode}
      />
      <Fonts darkmode={props.darkmode} toggleFont={toggleFont} />
      <div ref={domEl} id="domEl">
        <textarea
          value={textArea}
          onChange={funcTextArea}
          placeholder="Write something..."
          className="canvas_textarea"
          style={{
            fontFamily: `${font.fontFamily}`,
            fontSize: `${font.fontSize}px`,
          }}
        />
      </div>
    </div>
  );
}
