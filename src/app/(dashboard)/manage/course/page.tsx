import CourseManage from "@/components/course/CourseManage";
import { getAllCourses } from "@/lib/actions/course.actions";

const page = async () => {
  const courses = await getAllCourses();
  return (
    <div>
      <CourseManage
        courses={courses ? JSON.parse(JSON.stringify(courses)) : []}
      />
    </div>
  );
};

export default page;
