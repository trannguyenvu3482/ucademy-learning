import PageNotFound from "@/app/not-found";
import {
  IconCheck,
  IconComment,
  IconExplore,
  IconStudy,
  IconTime,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { courseLevelsLabel } from "@/constants";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import { ECourseStatus } from "@/types/enum";
import Image from "next/image";

const CourseDetail = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({ slug: params.slug });
  console.log(data);

  if (!data || data.status !== ECourseStatus.APPROVED) {
    return <PageNotFound />;
  }
  const videoId = data.intro_url?.split("v=")[1];
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                className="w-full h-full object-cover rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </>
          ) : (
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={data.image}
              alt="photo"
              fill
            />
          )}
        </div>
        <div className="bg-white dark:bg-grayDarker mt-4 p-4 rounded-md">
          <h1 className="font-bold text-3xl mb-5">{data.title}</h1>
          <CourseSection title="Mô tả">
            <div className="leading-normal whitespace-pre-wrap mb-10">
              {data.desc}
            </div>
          </CourseSection>
          <CourseSection title="Thông tin">
            <div className="grid grid-cols-4 gap-5 mb-10">
              <InfoBox title="Bài học">100</InfoBox>
              <InfoBox title="Lượt xem">{data.views}</InfoBox>
              <InfoBox title="Trình độ">
                {
                  courseLevelsLabel[
                    data.level as keyof typeof courseLevelsLabel
                  ]
                }
              </InfoBox>
              <InfoBox title="Thời lượng học">100h45p</InfoBox>
            </div>
          </CourseSection>
          <CourseSection title="Yêu cầu">
            <div className="leading-normal mb-10">
              {data.info.requirements.map((item, index) => (
                <div className="mb-3 flex items-center gap-2" key={index}>
                  <span className="flex-shrink-0 size-5 bg-primary text-white p-1 rounded-lg flex items-center">
                    <IconCheck className="size-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CourseSection>
          <CourseSection title="Lợi ích">
            <div className="leading-normal mb-10">
              {data.info.benefits.map((item, index) => (
                <div className="mb-3 flex items-center gap-2" key={index}>
                  <span className="flex-shrink-0 size-5 bg-primary text-white p-1 rounded-lg flex items-center">
                    <IconCheck className="size-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CourseSection>
          <CourseSection title="Những câu hỏi thường gặp">
            <div className="leading-normal mb-10 text-gray-400">
              {data.info.qa.map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </CourseSection>
        </div>
      </div>
      <div className="sticky top-6 h-max">
        <div className="bg-white rounded-lg p-5 dark:bg-grayDarker dark:text-white">
          <p className="text-md mb-2 text-sm">Trọn bộ khóa học</p>
          <div className="flex items-center gap-2 mb-2">
            <strong className="text-primary text-3xl">
              {data.sale_price.toLocaleString()}đ
            </strong>
            <span className="text-slate-500 line-through text-sm">
              {data.price.toLocaleString()}đ
            </span>
            <span className="inline-block ml-auto px-3 py-1 rounded-lg bg-primary text-white font-semibold text-sm">
              {Math.floor(((data.price - data.sale_price) / data.price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-md">Khóa học bao gồm:</h3>
          <ul className="mb-5 flex flex-col gap-3 text-slate-500 text-md">
            <li className="flex items-center gap-2">
              <IconTime className="size-4" />
              <span>Tổng thời lượng hơn 30h học, chất lượng Full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconStudy className="size-4" />
              <span>Được cung cấp chứng chỉ hoàn thành</span>
            </li>
            <li className="flex items-center gap-2">
              <IconComment className="size-4" />
              <span>Tham gia vào nhóm Zalo hỗ trợ học viên</span>
            </li>
            <li className="flex items-center gap-2">
              <IconExplore className="size-6" />
              <span>Được cung cấp đầy đủ tài liệu khóa học</span>
            </li>
          </ul>
          <Button variant="primary" className="w-full mb-2">
            Mua khóa học
          </Button>
          <span className="text-gray-500 text-xs">
            Hoàn tiền trong 30 ngày nếu khóa học không hiệu quả
          </span>
        </div>
      </div>
    </div>
  );
};

const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="border border-slate-300 dark:bg-slate-800 rounded-lg p-5">
      <h4 className="text-sm text-slate-400">{title}</h4>
      <h3 className="font-bold text-xl">{children}</h3>
    </div>
  );
};

const CourseSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-4 border-b border-b-gray-200">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      {children}
    </div>
  );
};
export default CourseDetail;
