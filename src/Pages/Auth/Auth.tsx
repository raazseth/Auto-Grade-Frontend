import { Box } from "@mui/material";
import "./index.css";
import Text from "@components/Core/Text";
import Button from "@components/Core/Button";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { API } from "@utils/Global";

const Auth = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const user = urlParams.get("user");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
    }
  }, []);

  const handleAuth = () => {
    setisLoading(true);
    window.location.href = API.loginWithGoogle;
  };

  return (
    <Box className="Auth">
      <Box className="Auth-Box">
        <Text
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#333",
          }}
        >
          Welcome User 👋
        </Text>
        <Text
          variant="body2"
          sx={{
            opacity: 0.8,
            mt: 0.5,
          }}
        >
          Login and allow access to your Google Classroom
        </Text>
        <Button
          variantColor="transparent"
          sx={{
            border: "1px solid var(--primary)",
            width: "100%",
            height: 44,
            mt: "auto",
            mb: "auto",
            padding: "8px 0 !important",
          }}
          fontColor="var(--primary)"
          isLoading={isLoading}
          onClick={handleAuth}
          startIcon={!isLoading && <FcGoogle size={24} />}
        >
          Continue with Google
        </Button>

        <Text
          variant="body2"
          sx={{
            opacity: 0.8,
            mt: 0.5,
            fontSize: "11px",
            fontStyle: "italic",
          }}
        >
          By continuing, You agree to our terms and service.
        </Text>
      </Box>
    </Box>
  );
};

export default Auth;
