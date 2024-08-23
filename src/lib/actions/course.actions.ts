"use server";
import Course, { ICourse } from "@/database/course.model";
import { TCreateCourseParams, TUpdateCourseParams } from "@/types";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

// FETCHING
export async function getAllCourses(): Promise<ICourse[] | []> {
  try {
    connectToDatabase();
    const courses = await Course.find();
    return courses;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCourseBySlug({
  slug,
}: {
  slug: string;
}): Promise<ICourse | undefined> {
  try {
    connectToDatabase();
    const course = await Course.findOne({ slug });
    return course;
  } catch (error) {
    console.log(error);
  }
}

// CRUD
export async function createCourse(
  params: TCreateCourseParams
): Promise<
  { success: boolean; data: string } | { success: boolean; message: string }
> {
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

export async function updateCourse(
  params: TUpdateCourseParams
): Promise<{ success: boolean; message: string }> {
  try {
    connectToDatabase();
    const course = await Course.findOneAndUpdate(
      {
        slug: params.slug,
      },
      params.updateData,
      {
        new: true,
      }
    );
    return {
      success: true,
      message: "Cập nhật khóa học thành công",
    };
    revalidatePath(`/`);
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
}
