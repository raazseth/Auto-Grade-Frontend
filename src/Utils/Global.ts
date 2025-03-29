const DEV = "http://localhost:3000/api";
const PRODUCTION = "https://autograde-k1ci.onrender.com/api";

export const BASE_URL = DEV;
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTRmNmRhODE0YTZkNTRkNmY3OGU0YyIsImlhdCI6MTc0MzI3MDU4MH0.A8wQPQOnudNEXg0hzgqDjnAYZeTqxQufuMy9_zwrGo4";

const createAPIRoutes = (
  routes: Record<string, string>
): Record<string, string> => {
  const updatedRoutes: Record<string, string> = {};
  for (const key in routes) {
    if (routes.hasOwnProperty(key)) {
      updatedRoutes[key] = `${BASE_URL}${routes[key]}`;
    }
  }
  return updatedRoutes;
};

const apiRoutes = {
  loginWithGoogle: "/auth/google",
  getAllCourses: "/courses/fetchAllCourses",
} as const;

export const API = createAPIRoutes(apiRoutes) as Record<string, string>;
