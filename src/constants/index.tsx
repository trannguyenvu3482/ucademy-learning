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
  { value: ECourseLevel.INTERMEDIATE, label: "Trung bình" },
  { value: ECourseLevel.ADVANCED, label: "Nâng cao" },
];

export const courseLevelsLabel: Record<ECourseLevel, string> = {
  [ECourseLevel.BEGINNER]: "Dễ",
  [ECourseLevel.INTERMEDIATE]: "Trung bình",
  [ECourseLevel.ADVANCED]: "Nâng cao",
};

export const courseStatus = [
  { value: ECourseStatus.APPROVED, label: "Đã duyệt" },
  { value: ECourseStatus.PENDING, label: "Đang chờ duyệt" },
  { value: ECourseStatus.REJECTED, label: "Từ chối" },
];

export const courseStatusLabel: Record<ECourseStatus, string> = {
  [ECourseStatus.APPROVED]: "Đã duyệt",
  [ECourseStatus.PENDING]: "Đang chờ duyệt",
  [ECourseStatus.REJECTED]: "Từ chối",
};
