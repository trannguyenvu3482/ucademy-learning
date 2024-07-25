import React from "react";
import IconPlay from "../icons/IconPlay";
import IconExplore from "../icons/IconExplore";
import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "../common";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white flex flex-col dark:bg-grayDarker">
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
