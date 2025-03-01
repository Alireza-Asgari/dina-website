"use client";
import React from "react";
import LinkComponent from "./ui/Link";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
type ProductType = {
  productName: string;
  description?: string;
  items?: string[];
  href: string;
  image: string;
  reverse?: boolean;
};
export default function Product({
  productName,
  description,
  items,
  href,
  image,
  reverse = false,
}: ProductType) {
  return (
    <div
      className={clsx(
        "flex h-screen flex-col-reverse md:flex-row md:h-fit items-center justify-around gap-8 my-20 ",
        reverse && "lg:flex-row-reverse relative"
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ amount: "all" }}
        className="flex-text max-w-2xl"
      >
        <h2 className="heading-3 ">{productName}</h2>
        {description && <p className="paragraph">{description}</p>}
        {items && (
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-800 dark:bg-white-100 translate-y-1/2"></span>
                <p className="paragraph">{item}</p>
              </li>
            ))}
          </ul>
        )}
        <LinkComponent href={href}>
          <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
        </LinkComponent>
      </motion.div>
      <div
        // initial={{ opacity: 0, rotateY: 100, scale: 1.5 }}
        // whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ amount: 0.3 }}
        className="relative w-72 sm:w-96 md:w-[500px] lg:w-[700px] aspect-[5/4] md:ml-10 group"
      >
        <Image
          alt={href}
          src={image}
          fill
          className="object-contain object-center "
        />
        {/* <div className="w-full h-full border-4 border-gray-800 dark:border-white relative scale-[.7] group-hover:scale-100 hover:scale-100 transition-transform duration-500 " /> */}
      </div>

      {reverse && (
        <>
          <span className="absolute top-0 right-0 bg-[#5C009514] w-[200px] h-[350px] rounded-[50%] blur-[130px]" />
          <span className="absolute -top-14 right-60 translate-x-1/2 bg-[#5C009514] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
          <span className="absolute -top-14 right-1/4 bg-[#6E00951A] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
          <span className="absolute -top-14 right-1/3 -translate-x-1/2 bg-[#6C016B1F] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
        </>
      )}
    </div>
  );
}
