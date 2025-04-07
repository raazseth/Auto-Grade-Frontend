import { useEffect, useState } from "react";
import "./index.css";
import { Box, Checkbox } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Text from "@components/Core/Text";
import Button from "@components/Core/Button";
import { API } from "@utils/Global";
import Input from "@components/Core/Input";
import { login } from "@api/auth";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setemail] = useState("prakashpramanickjsr1717@gmail.com");
  const [password, setpassword] = useState("1234");
  const [isPassword, setisPassword] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const user = urlParams.get("user");

    console.log("Extracted Token:", token);
    console.log("Extracted User:", user);

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      window.location.href = "/";
    }
  }, []);

  const handleAuth = () => {
    setIsLoading(true);
    window.location.href = API.loginWithGoogle;
  };

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please fill the fields");
    } else {
      try {
        setIsLoading(true);
        const res = await login({ email, password });
        if (res) {
          window.location.href = res?.redirectUrl;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Box className="Auth">
      <Box className="Auth-Box">
        <Text variant="h5" sx={{ fontWeight: 600, color: "#333" }}>
          Welcome User 👋
        </Text>
        <Box>
          <Input
            placeholder="Enter Your Email"
            label="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            placeholder="Enter Your Password"
            type={isPassword ? "password" : "text"}
            label="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Box
            onClick={() => {
              setisPassword(!isPassword);
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "auto",
              cursor: "pointer",
            }}
          >
            <Checkbox
              checked={isPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setisPassword(event.target.checked);
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Text>{!isPassword ? "Hide Password" : "Show Password"}</Text>
          </Box>
          <Button
            sx={{ width: "100%", mt: 1 }}
            onClick={handleLogin}
            isLoading={isLoading}
          >
            Login
          </Button>
        </Box>
        <Text variant="body2" sx={{ opacity: 0.8, mt: 2, mb: 1 }}>
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
          sx={{ opacity: 0.8, mt: 0.5, fontSize: "11px", fontStyle: "italic" }}
        >
          By continuing, You agree to our terms and service.
        </Text>
      </Box>
    </Box>
  );
};

export default Auth;
