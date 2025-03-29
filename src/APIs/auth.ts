import { API } from "@utils/Global";

export const loginWithGoogle = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(API.loginWithGoogle, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            reject(
              new Error(
                `Google login failed: ${response.status} ${response.statusText} - ${text}`
              )
            );
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error logging in with Google:", error);
        reject(error);
      });
  });
};
