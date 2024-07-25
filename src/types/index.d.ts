type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

// User
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email_address: string;
  name?: string;
  avatar?: string;
};

export type { TActiveLinkProps, TCreateUserParams };
