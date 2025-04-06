import { API } from "@utils/Global";

export const login = (payload: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.login, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `login failed: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error logging in:", error);
        reject(error);
      });
  });
};
