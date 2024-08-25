"use client";
import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  return (
    <Link
      className={`p-3 rounded-md flex items-center gap-2 transition-all w-full dark:text-grayDark text-md bg-opacity-50 ${
        isActive
          ? "!text-white bg-primary svg-animate font-semibold"
          : "hover:!bg-primary hover:!bg-opacity-10 "
      }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
