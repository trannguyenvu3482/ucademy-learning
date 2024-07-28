import React from "react";

const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
  console.log(params, searchParams);
  return <div>Lesson of course</div>;
};

export default page;
