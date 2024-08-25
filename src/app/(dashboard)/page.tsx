import { CourseGrid } from "@/components/common";
import Heading from "@/components/common/Heading";
import CourseItem from "@/components/course/CourseItem";
import { getAllCourses } from "@/lib/actions/course.actions";

const page = async () => {
  const courses = await getAllCourses();
  console.log(courses);

  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {courses?.length > 0 &&
          courses.map((course) => (
            <CourseItem key={course.slug} data={course} />
          ))}
      </CourseGrid>
    </div>
  );
};

export default page;
