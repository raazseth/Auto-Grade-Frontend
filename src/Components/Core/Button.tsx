import { styled } from "@mui/material/styles";
import MUIButton from "@mui/material/Button";
import { CircularProgress, Tooltip } from "@mui/material";
import { FC, useMemo } from "react";

export interface IButtonProps
  extends Omit<React.ComponentProps<typeof MUIButton>, "color"> {
  variantColor?:
    | "primary"
    | "secondary"
    | "error"
    | "transparent"
    | "secondaryFilled";
  isLoading?: boolean;
  tooltipTitle?: string;
  fontColor?: string;
  shape?: "rounded" | "corner" | "normal" | "circle";
  paddingType?: "xy" | "xxy" | "xyy" | "wide" | "widden" | "normal";
}

const BootstrapButton = styled(MUIButton)({
  boxShadow: "none",
  textTransform: "none",
  fontFamily: "Arimo, sans-serif",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&:hover": {
    opacity: 0.9,
    transition: "all 0.2s ease-in-out",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,0,0,0.15)",
  },
});

const Button: FC<IButtonProps> = ({
  variantColor = "secondary",
  shape = "normal",
  paddingType = "normal",
  isLoading = false,
  tooltipTitle = "",
  fontColor,
  sx,
  children,
  ...props
}) => {
  const colors: any = useMemo(() => {
    const colorMap: any = {
      primary: {
        background: "var(--primary)",
        borderColor: "var(--primary)",
      },
      secondary: {
        background: "#09203f",
        borderColor: "#09203f",
      },
      error: { background: "var(--error)", borderColor: "var(--error-dark)" },
      transparent: {
        background: "transparent",
        borderColor: "#09203f",
      },
    };
    return colorMap[variantColor] || colorMap.primary;
  }, [variantColor]);

  const borderRadius = useMemo(() => {
    const radiusMap = { rounded: 24, corner: 8, normal: 2, circle: 100 };
    return radiusMap[shape] ?? 2;
  }, [shape]);

  const padding = useMemo(() => {
    const paddingMap = {
      xy: "4px",
      xxy: "8px 4px",
      xyy: "4px 8px",
      wide: "6px 12px",
      widden: "8px 14px",
      normal: "6px 10px",
    };
    return paddingMap[paddingType] ?? "6px 10px";
  }, [paddingType]);

  return (
    <Tooltip title={tooltipTitle}>
      <BootstrapButton
        {...props}
        disabled={isLoading}
        sx={{
          backgroundColor: colors.background,
          borderColor: colors.borderColor,
          borderRadius,
          padding,
          fontSize: props.style?.fontSize ?? 18,
          color: fontColor ?? props.style?.color ?? "var(--white)",
          minWidth: props.style?.minWidth ?? "auto",
          margin: props.style?.margin ?? "2px",
          cursor: isLoading || props.disabled ? "not-allowed" : "pointer",
          "&:hover": {
            backgroundColor:
              variantColor === "transparent"
                ? "#09203f"
                : colors.backgroundColor,
            color: "#fff !important",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,0,0,0.15)",
          },
          ...sx,
        }}
        disableRipple
      >
        {isLoading ? (
          <CircularProgress
            sx={{ color: fontColor ?? props.style?.color ?? "var(--white)" }}
            size={20}
          />
        ) : (
          children
        )}
      </BootstrapButton>
    </Tooltip>
  );
};

export default Button;
