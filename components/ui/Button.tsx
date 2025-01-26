import Link from "next/link";
import React from "react";

export default function Button({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${className} text-gray-800 dark:text-white text-lg font-light border-2 rounded-full py-2 px-4 sm:py-4 sm:px-6 border-gray-800 dark:border-white w-fit inline-block tracking-wide`}
      >
        {children}
      </Link>
    );
  }
  return <div></div>;
}
