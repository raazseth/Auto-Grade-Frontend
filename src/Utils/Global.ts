const DEV = "http://localhost:3000/api";
const PRODUCTION = "https://autograde-k1ci.onrender.com/api";

export const BASE_URL = PRODUCTION;
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTRmNmRhODE0YTZkNTRkNmY3OGU0YyIsImlhdCI6MTc0Mzg4MDY1Nn0.3d8276ILjcuzHaLuBty01M6OFMrlt3112q7Jw0F0r34";

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
  createAssignment: "/assignment/createAssignment",
  getAllCourses: "/courses/fetchAllCourses",
  getCourseWork: "/courses/fetchCourseWork", //->CourseID
  getSubmissions: "/courses/fetchSubmissions", //->CourseID/CourseWorkID
  postGradeAssignment: "/assignment/gradeAssignment",
} as const;

export const API = createAPIRoutes(apiRoutes) as Record<string, string>;
