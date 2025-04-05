import { API } from "@utils/Global";

export const saveAssignment = (
  assignment: any,
  token: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.log(assignment, "djsidi");
    fetch(API.createAssignment, {
      method: "POST",
      body: assignment?.materialFile ? assignment : JSON.stringify(assignment),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": assignment?.materialFile
          ? "multipart/form-data"
          : "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Failed to save assignment: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error saving assignment:", error);
        reject(error);
      });
  });
};

export const getAllAssignments = (
  courseID: string,
  token: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.getCourseWork + "/" + courseID, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Failed to fetch assignments: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error fetching assignments:", error);
        reject(error);
      });
  });
};

export const getAllCourses = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.getAllCourses, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Failed to fetch assignments: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error fetching assignments:", error);
        reject(error);
      });
  });
};

export const getSubmissions = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.getSubmissions, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Failed to fetch assignments: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error fetching assignments:", error);
        reject(error);
      });
  });
};

export const postGradeAssignment = (payload: any, token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.postGradeAssignment, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Failed to fetch assignments: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error fetching assignments:", error);
        reject(error);
      });
  });
};
