export type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

// User
export type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export type TCreateCourseParams = {
  title: string;
  slug: string;
};
