import React from "react";
import Intro from "./Intro";
import Grid from "./Grid";

export default function page() {
  return (
    <div className="relative w-screen bg-gray-200 dark:bg-gray-700 ">
      <Intro />
      <Grid />
    </div>
  );
}
