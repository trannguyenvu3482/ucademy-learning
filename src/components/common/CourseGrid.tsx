import React from "react";

const CourseGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="course-list grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-8 mt-4 course-slider">
      {children}
    </div>
  );
};

export default CourseGrid;
