import { FC } from "react";
import "./index.css";
import { Typography, TypographyProps } from "@mui/material";

interface IText extends TypographyProps {
  className?: string;
  variantColor?: "primary" | "white" | "secondary";
}

const Text: FC<IText> = ({
  children,
  variantColor = 'primary',
  className = "",
  ...props
}) => {
  return (
    <Typography
      className={`core_text ${variantColor ? variantColor : ""} ${className}`}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;
