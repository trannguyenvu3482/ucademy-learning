import React from "react";

const CourseGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="course-list grid grid-cols-3 gap-8 mt-4">{children}</div>
  );
};

export default CourseGrid;
