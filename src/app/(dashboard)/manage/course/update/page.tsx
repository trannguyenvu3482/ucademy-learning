import Heading from "@/components/common/Heading";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import CourseUpdate from "./CourseUpdate";

const UpdateCourse = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });

  console.log(findCourse);

  if (!findCourse) {
    return <p>Không tìm thấy khóa học</p>;
  }

  return (
    <>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate data={JSON.parse(JSON.stringify(findCourse))} />
    </>
  );
};

export default UpdateCourse;
