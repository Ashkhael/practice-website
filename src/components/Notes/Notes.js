import React from "react";
import NoteTemplate from "./NoteTemplate";
import "./Notes.css";
import img1 from "../../Media/images/img-3.jpg";
import img2 from "../../Media/images/img-5.jpg";
import img3 from "../../Media/images/img-9.jpg";
import img4 from "../../Media/images/img-8.jpg";

export default function Notes() {
  return (
    <div className="notes">
      <h1>PLACEHOLDER TITLE</h1>
      <div className="notes_container">
        <div className="notes_wrapper">
          <ul className="notes_sheets">
            <NoteTemplate
              src={img1}
              text="Snow-covered Mountain"
              label="Placeholder"
              path="/services"
            />
            <NoteTemplate
              src={img2}
              text="Lake and Mountains"
              label="Placeholder"
              path="/services"
            />
          </ul>
          <ul className="notes_sheets">
            <NoteTemplate
              src={img3}
              text="Snow-covered Meadow"
              label="Placeholder"
              path="/services"
            />
            <NoteTemplate
              src={img4}
              text="Mountain Slope from Tent"
              label="Placeholder"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
