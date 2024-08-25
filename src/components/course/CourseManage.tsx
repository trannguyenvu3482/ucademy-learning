"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commonClassNames, courseStatus } from "@/constants";
import { ICourse } from "@/database/course.model";
import { updateCourse } from "@/lib/actions/course.actions";
import { cn } from "@/lib/utils";
import { ECourseStatus } from "@/types/enum";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Heading from "../common/Heading";
import { IconDelete, IconEdit, IconEye, IconStudy } from "../icons";
import { Input } from "../ui/input";
const CourseManage = ({ courses }: { courses: ICourse[] }) => {
  const handleChangeStatus = async (slug: string, status: ECourseStatus) => {
    try {
      Swal.fire({
        title: "Bạn có muốn đổi trạng thái hay không?",
        text: "Bạn sẽ không thể hoàn tác hành động này!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý!",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await updateCourse({
            slug,
            updateData: {
              status:
                status === ECourseStatus.PENDING
                  ? ECourseStatus.APPROVED
                  : ECourseStatus.PENDING,
              _destroy: false,
            },
            path: "/manage/course",
          });
          toast.success("Cập nhật trạng thái thành công");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa khóa học này?",
      text: "Bạn sẽ không thể hoàn tác hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateCourse({
          slug,
          updateData: { status: ECourseStatus.PENDING, _destroy: true },
          path: "/manage/course",
        });
        toast.success("Xóa khóa học thành công");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mb-10">
        <Heading className="">Quản lý khóa học</Heading>
        <div className="w-full lg:w-[300px]">
          <Input placeholder="Tìm kiếm khóa học..." />
        </div>
      </div>
      <Table className="table-responsive">
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá khóa học</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.length > 0 &&
            courses.map((course) => {
              const status = courseStatus.find(
                (status) => status.value === course.status
              );
              return (
                <TableRow key={course.slug}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        className="flex-shrink-0 size-16 rounded-lg object-cover"
                        alt=""
                        src={
                          course.image ||
                          "https://placehold.co/100x100/png?text=No+Image"
                        }
                        width={80}
                        height={80}
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-sm lg:text-base">
                          {course.title}
                        </h3>
                        <h4 className="text-sm text-slate-500">
                          {course.created_at.toLocaleString()}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-base">
                      {course.price.toLocaleString()}đ
                    </span>
                  </TableCell>
                  <TableCell>
                    <button
                      type="button"
                      className={cn(commonClassNames.status, status?.color)}
                      onClick={() =>
                        handleChangeStatus(course.slug, course.status)
                      }
                    >
                      {status?.label}
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        href={`/manage/course/update-content?slug=${course.slug}`}
                        className={commonClassNames.actionButton}
                      >
                        <IconStudy />
                      </Link>
                      <Link
                        href={`/course/${course.slug}`}
                        target="_blank"
                        className={commonClassNames.actionButton}
                      >
                        <IconEye />
                      </Link>
                      <Link
                        href={`/manage/course/update?slug=${course.slug}`}
                        className={commonClassNames.actionButton}
                      >
                        <IconEdit />
                      </Link>
                      <button
                        className={commonClassNames.actionButton}
                        onClick={() => handleDeleteCourse(course.slug)}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          {/* <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image
                  className="flex-shrink-0 size-16 rounded-lg object-cover"
                  alt=""
                  src="https://picsum.photos/200"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base">
                    Khóa học hướng dẫn về Photoshop
                  </h3>
                  <h4 className="text-sm text-slate-500">24/08/2024</h4>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="font-bold text-base">400.000đ</span>
            </TableCell>
            <TableCell>
              <span
                className={cn(commonClassNames.status, courseStatus[0].color)}
              >
                {courseStatus[0].label}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-3">
                <Link
                  href="/manage/course/update-content?slug=khoa-hoc-nextjs-pro"
                  className={commonClassNames.actionButton}
                >
                  <IconStudy />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className={commonClassNames.actionButton}
                >
                  <IconEye />
                </Link>
                <Link
                  href="/manage/course/update?slug=khoa-hoc-nextjs-pro"
                  className={commonClassNames.actionButton}
                >
                  <IconEdit />
                </Link>
                <button className={commonClassNames.actionButton}>
                  <IconDelete />
                </button>
              </div>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-3 mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {/* <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default CourseManage;
