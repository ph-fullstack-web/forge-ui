interface CTApiRoutes {
  employee: {
    getAll: () => string;
    getByEmail: (email: string) => string;
  };
}

export const ctApiRoutes: CTApiRoutes = {
  employee: {
    getAll: () => '/people',
    getByEmail: (email: string) => `/people/email/${email}`,
  },
};
