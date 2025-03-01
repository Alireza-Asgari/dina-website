import React from "react";
import Hero from "./Hero";
import Products from "./Products";

export default function Page() {
  return (
    <div className="w-full overflow-hidden bg-white-200 dark:bg-productsBg text-gray-800 dark:text-white transition-colors duration-300 pb-8">
      <Hero />
      <Products />
    </div>
  );
}
