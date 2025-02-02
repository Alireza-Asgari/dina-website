import React from "react";
import Hero from "./Hero";
import Products from "./Products";

export default function Page() {
  return (
    <div className="bg-white-200 dark:bg-productsBg text-gray-800 dark:text-white transition-colors duration-300 overflow-x-clip">
      <Hero />
      <Products />
      <Products />
    </div>
  );
}
