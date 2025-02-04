import { BgShape1, BgShape2, BgShape3 } from "@/components/BgSahpes";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiAparat } from "react-icons/si";

export default function Social() {
  return (
    <div className="w-full my-32 py-10 relative flex flex-col  items-center">
      <h2 className="heading-1 text-center relative z-20">
        شبکه های اجتماعی ما را دنبال کنید
      </h2>
      <p className="paragraph text-center max-w-md mt-6 relative z-10">
        شما میتونید کارهای مارو توی پست های موجود در این شبکه ها هم ببینید!
      </p>
      <div className="mt-10 flex max-w-lg gap-8 relative text-white">
        <div className="social-item bg-blue-300">
          <BsTwitterX className="text-4xl" />
        </div>
        <div className="social-item bg-gradient-insta">
          <IoLogoInstagram className="text-4xl" />
        </div>
        <div className="social-item bg-primary-300">
          <FaLinkedinIn className="text-4xl" />
        </div>
        <div className="social-item bg-red-300">
          <SiAparat className="text-4xl" />
        </div>
        <div className="absolute top-1/4 -translate-y-20 left-1/2">
          <BgShape3 />
        </div>
      </div>

      <BgShape2 />
    </div>
  );
}
