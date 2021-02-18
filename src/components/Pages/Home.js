import React from "react";
import VideoSection from "../VideoSection/VideoSection";
import Notes from "../Notes/Notes";
import Footer from "../Footer/Footer";
import "../../App.css";

export default function Home() {
  return (
    <>
      <VideoSection />
      <Notes />
      <Footer />
    </>
  );
}
