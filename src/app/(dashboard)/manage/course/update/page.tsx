import Heading from "@/components/common/Heading";
import CourseUpdate from "./CourseUpdate";

const UpdateCourse = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  return (
    <>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate slug={searchParams.slug} />
    </>
  );
};

export default UpdateCourse;
