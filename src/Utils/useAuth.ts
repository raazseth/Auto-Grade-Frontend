import { useState, useEffect } from "react";
import useGlobalState from "./useGlobalState";

const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useGlobalState();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        const parsedUser = JSON.parse(storedUser);

        dispatch({
          type: "SET_USER",
          payload: {
            user: parsedUser,
            token: storedToken,
          },
        });

        setUser(parsedUser);
        setToken(storedToken);
      }
    } catch (err) {
      console.error("Error loading auth data:", err);
      setError("Failed to load authentication data.");
    }
  }, [dispatch]);

  const setAuth = (userData?: any, authToken?: string) => {
    try {
      let newUser: any | null = userData || null;
      let newToken: string | null = authToken || null;
  
      if (!newUser || !newToken) {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
  
        if (storedUser) {
          try {
            newUser = JSON.parse(storedUser);
          } catch (err) {
            console.error("Invalid JSON in stored user data:", err);
            newUser = null;
          }
        }
  
        if (storedToken) {
          newToken = storedToken;
        }
      }
  
      if (newUser && newToken) {
        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("token", newToken);
  
        dispatch({
          type: "SET_USER",
          payload: {
            user: JSON.parse(newUser),
            token: newToken,
          },
        });
  
        setUser(newUser);
        setToken(newToken);
      }
    } catch (error) {
      console.error("Error setting auth data:", error);
      setError("Failed to set authentication data.");
    }
  };
  

  const logout = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      dispatch({ type: "LOGOUT" });
      setUser(null);
      setToken(null);

      return { status: 200, message: "Logged out successfully" };
    } catch (err) {
      console.error("Logout error:", err);
      return {
        status: 400,
        message: "An error occurred during logout",
      };
    }
  };

  return {
    setAuth,
    isAuthenticated: !!user && !!token,
    user,
    token,
    error,
    logout,
  };
};

export default useAuth;
