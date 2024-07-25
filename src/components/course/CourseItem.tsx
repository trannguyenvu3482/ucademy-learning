import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconEye, IconStar, IconTime } from "../icons";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "3000",
      icon: (className?: string) => <IconEye className={className} />,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className} />,
    },
    {
      title: "30h25p",
      icon: (className?: string) => <IconTime className={className} />,
    },
  ];

  return (
    <div className="course-item bg-white border-gray-100 p-4 rounded-2xl dark:bg-grayDarker border dark:border-opacity-10">
      <Link href="#" className="block h-[180px] relative">
        <Image
          src="https://images.unsplash.com/photo-1721296378509-4d534a597dca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          sizes="(min-width: 640px) 300px, 100vw"
        />
        <span className="inline-block px-3 py-1 rounded-full top-3 right-3 z-10 absolute text-white font-medium bg-green-500 text-xs">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">
          Khóa học NextJS Pro - Xây dựng E-Learning System hoàn chỉnh
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
          {courseInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-1">
              {info.icon("size-4")}
              <span>{info.title}</span>
            </div>
          ))}
          <span className="font-bold text-primary ml-auto text-base">
            799.000
          </span>
        </div>
        <Link
          href="#"
          className="w-full mt-10 flex justify-center items-center rounded-lg text-white bg-primary h-12 font-bold"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
