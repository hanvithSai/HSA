import React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import HeatmapSection from "./app/components/Heatmap";

export default function Profile() {
  return (
    <div>
      {/* About Me Section */}
      <AboutMe />
      <HeatmapSection />
      {/* Education Section */}
      <Education />
    </div>
  );
}