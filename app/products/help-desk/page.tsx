import React from "react";
import Intro from "./Intro";
import Grid from "./Grid";
import CheckDetails from "./CheckDetails";
import Facilities from "./Facilities";
import OtherProducts from "./OtherProducts";

export default function page() {
  return (
    <div className="w-full relative bg-gray-200 dark:bg-gray-700 pb-8">
      <Intro />
      <Grid />
      <CheckDetails />
      <Facilities />
      <OtherProducts />
    </div>
  );
}
