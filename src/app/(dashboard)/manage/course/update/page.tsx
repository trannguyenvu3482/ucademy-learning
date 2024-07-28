import Heading from "@/components/common/Heading";

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
    </>
  );
};

export default UpdateCourse;
