import { Icon404 } from "@/components/icons";

const PageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-inherit px-4 dark:bg-grayDarkest">
      <div className="text-center">
        <Icon404 />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">
          Chúng tôi không thể tìm thấy trang này.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Về lại trang chủ
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
