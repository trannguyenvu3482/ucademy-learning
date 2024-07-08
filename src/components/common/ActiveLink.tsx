"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}

const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  return (
    <Link
      className={`p-3 rounded-md flex items-center gap-2 transition-all w-full ${
        isActive
          ? "text-white bg-primary svg-animate"
          : "hover:text-primary hover:bg-primary hover:bg-opacity-10 "
      }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
