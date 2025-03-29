import { API, TOKEN } from "@utils/Global";

export const saveAssignment = (
  assignment: Record<string, any>
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    Object.keys(assignment).forEach((key) => {
      formData.append(key, assignment[key]);
    });

    fetch("http://localhost:3000/assignments", {
      method: "POST",
      body: formData,
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

export const getAllAssignments = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/assignments", {
      method: "GET",
      headers: {
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

export const getAllCourses = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.getAllCourses, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
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
