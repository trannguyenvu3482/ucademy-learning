"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCourse } from "@/lib/actions/course.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import slugify from "slugify";

const formSchema = z.object({
  title: z.string().min(5, "Tên khóa học phải có ít nhất 5 ký tự"),
  slug: z.string().optional(),
});

const CourseAddNew = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slug, setSlug] = useState("duong-dan-khoa-hoc");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const data = {
        title: values.title,
        slug: values.slug || slug,
      };
      console.log(data);

      const res = await createCourse(data);
      console.log(res);

      if (res?.success) {
        toast.success("Tạo khóa học thành công");
        form.reset();
        setSlug("");
      }

      if (res?.data) {
        router.push(`/manage/course/update?slug=${res.data.slug}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên khóa học *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tên khóa học"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setSlug(slugify(e.target.value, { lower: true }));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn khóa học</FormLabel>
                <FormControl>
                  <Input placeholder={slug} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          isLoading={isSubmitting}
          disabled={isSubmitting}
          variant="primary"
          className="w-[120px]"
          type="submit"
        >
          Tạo khóa học
        </Button>
      </form>
    </Form>
  );
};

export default CourseAddNew;
