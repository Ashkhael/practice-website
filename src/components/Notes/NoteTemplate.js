import React from "react";
import { Link } from "react-router-dom";

export default function NoteTemplate(props) {
  return (
    <>
      <li className="notes_sheet">
        <Link className="notes_sheet_link" to={props.path}>
          <figure className="notes_sheet_wrap" data-category={props.label}>
            <img src={props.src} alt="Picture" className="notes_sheet_img" />
          </figure>
          <div className="notes_sheet_info">
            <h5 className="notes_sheet_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
