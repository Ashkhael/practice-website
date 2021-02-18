import React from "react";
import { Button } from "../Button/Button";
import video from "../../Media/videos/vid-1.mp4";
import "./VideoSection.css";
import "../../App.css";

export default function VideoSection() {
  return (
    <div className="video-container">
      <video src={video} autoPlay loop muted />
      <h1>PLACEHOLDER TITLE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vitae hendrerit metus, sed molestie nibh. Maecenas eget posuere massa.
        In hac habitasse platea dictumst. Sed quis mauris et augue pellentesque
        egestas. Sed in consequat nisl. Praesent pharetra nunc id erat rutrum
        pharetra. Quisque facilisis ornare arcu. Integer id bibendum lacus. In
        nec viverra mi. Nunc felis justo, venenatis nec ullamcorper a, vehicula
        eu mauris. Duis ornare ac massa in ullamcorper. In feugiat velit erat,
        nec feugiat ex laoreet at. Suspendisse pulvinar velit eu scelerisque
        facilisis.
      </p>
      <div className="video-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
