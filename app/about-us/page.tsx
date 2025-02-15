import React from "react";
import Hero from "./Hero";
import Goals from "./Goals";
import Social from "./Social";

export default function page() {
  return (
    <div className="w-full pb-8 h-fit overflow-hidden bg-white overflow-x-hidden text-gray-800 dark:text-white dark:bg-productsBg">
      <Hero />
      <Goals />
      <Social />
    </div>
  );
}
