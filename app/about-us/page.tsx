import React from "react";
import Hero from "./Hero";
import Goals from "./Goals";
import Social from "./Social";

export default function page() {
  return (
    <div className="w-screen mx-auto pb-8 text-gray-800 dark:text-white bg-white-200 dark:bg-productsBg overflow-x-clip">
      <Hero />
      <Goals />
      <Social />
    </div>
  );
}
