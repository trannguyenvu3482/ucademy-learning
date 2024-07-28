"use server";
import Course from "@/database/course.model";
import { TCreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";

// FETCHING
export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const course = await Course.findOne({ slug });
    return course;
  } catch (error) {
    console.log(error);
  }
}

// CRUD
export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
