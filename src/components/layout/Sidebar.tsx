"use client";
import { menuItems } from "@/constants";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../common";
import { ModeToggle } from "../common/ModeToggle";
import { IconUser } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="hidden sticky top-0 h-screen z-10 p-5 border-DarkMode bg-DarkMode lg:flex flex-col ">
      <Link href="/" className="logo inline-block font-bold text-3xl mb-5">
        <span className="text-primary">U</span>cademy
      </Link>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.url}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
      <div></div>
      <div className="mt-auto flex items-center justify-between gap-5">
        <ModeToggle />
        {!userId && (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex justify-center items-center p-1"
          >
            <IconUser />
          </Link>
        )}
        <UserButton />
      </div>
    </div>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li className="flex items-center w-full">
      <ActiveLink url={url}>
        {icon}
        <span>{title}</span>
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
