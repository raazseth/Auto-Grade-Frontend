import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { SnackbarProps } from "@mui/material/Snackbar";

export interface IAlert {
  open: boolean;
  severity?: "error" | "info" | "success" | "warning";
  message: string;
}

export interface IAlertProps extends SnackbarProps {
  open: boolean;
  handleClose: any;
  message: string;
  origin?: "center" | "left" | "right";
  duration?: 1200 | 1800 | 2400 | 3000 | 4200 | 6000;
  severity?: "error" | "info" | "success" | "warning";
}

const AlertBox = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ severity, ...props }, ref) => (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      severity={severity}
      {...props}
    />
  )
);

AlertBox.displayName = "AlertBox";

const Alert: React.FC<IAlertProps> = React.memo(
  ({
    open,
    handleClose,
    message,
    origin = "center",
    duration = 1200,
    severity = "error",
    ...snackbarProps
  }) => (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: origin || "center" }}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      {...snackbarProps}
    >
      <AlertBox
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </AlertBox>
    </Snackbar>
  )
);

Alert.displayName = "Alert";

export default Alert;
