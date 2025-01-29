import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import Link from "next/link";
export default function LinkComponent({
  children,
  href = "/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={`/${href}`}
      className="flex text-base sm:text-lg items-end relative gap-1 w-fit border-b-2 border-gray-800 dark:border-white pb-3"
    >
      {children}
      <HiOutlineArrowUp
        className="-rotate-45 -translate-y-[2px]"
        style={{ fontWeight: "bold", fontSize: "24px" }}
      />
    </Link>
  );
}
