import React from "react";
import Descriptions from "./Descriptions";
import Form from "./Form";
import Social from "../about-us/Social";

export default function page() {
  return (
    <div className="w-full h-full bg-white overflow-hidden text-gray-800 dark:text-white dark:bg-productsBg">
      <Descriptions />
      <Form />
      <div className="border-2 border-dashed m-4 h-fit border-gray-800 dark:border-white">
        <Social />
      </div>
    </div>
  );
}
