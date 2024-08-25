import {
  IconCart,
  IconComment,
  IconExplore,
  IconPlay,
  IconStudy,
  IconUser,
} from "@/components/icons";
import { ECourseLevel, ECourseStatus } from "@/types/enum";

export const menuItems: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconStudy className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUser className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconCart className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];

export const courseLevels: {
  value: ECourseLevel;
  label: string;
}[] = [
  { value: ECourseLevel.BEGINNER, label: "Dễ" },
  {
    value: ECourseLevel.INTERMEDIATE,
    label: "Trung bình",
  },
  { value: ECourseLevel.ADVANCED, label: "Nâng cao" },
];

export const courseLevelsLabel: Record<ECourseLevel, string> = {
  [ECourseLevel.BEGINNER]: "Dễ",
  [ECourseLevel.INTERMEDIATE]: "Trung bình",
  [ECourseLevel.ADVANCED]: "Nâng cao",
};

export const courseStatus = [
  {
    value: ECourseStatus.APPROVED,
    label: "Đã duyệt",
    color: "text-green-500 bg-green-500",
  },
  {
    value: ECourseStatus.PENDING,
    label: "Đang chờ duyệt",
    color: "text-yellow-500 bg-yellow-500",
  },
  {
    value: ECourseStatus.REJECTED,
    label: "Từ chối",
    color: "text-red-500 bg-red-500",
  },
];

export const courseStatusLabel: Record<ECourseStatus, string> = {
  [ECourseStatus.APPROVED]: "Đã duyệt",
  [ECourseStatus.PENDING]: "Đang chờ duyệt",
  [ECourseStatus.REJECTED]: "Từ chối",
};

export const commonClassNames = {
  status:
    "bg-opacity-10 border border-current rounded-md font-medium px-3 py-1 text-sm whitespace-nowrap",
  actionButton:
    "size-10 rounded-md border border-gray-200 flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-50 text-gray-500 border-DarkMode dark:bg-transparent dark:hover:bg-gray-800",
};
