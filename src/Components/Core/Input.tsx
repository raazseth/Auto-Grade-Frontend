import { FC } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  InputBase,
  FormControl,
  InputLabel,
  FormHelperText,
  InputBaseProps,
  FormControlProps,
} from "@mui/material";

interface IInput extends InputBaseProps {
  label?: string;
  helperText?: string;
  parent?: FormControlProps;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.6),
    color: "var(--secondary)",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #E0E3E7",
    color: "black",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#09203f", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#537895",
      backgroundColor: "#fff",
    },
  },
}));

const Input: FC<IInput> = ({ label, helperText, parent, ...props }) => {
  return (
    <FormControl
      variant="standard"
      {...parent}
      style={{ width: "100%", marginBottom: 8 }}
    >
      {label && (
        <InputLabel shrink htmlFor="bootstrap-input">
          {label}
        </InputLabel>
      )}
      <BootstrapInput {...props} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Input;
