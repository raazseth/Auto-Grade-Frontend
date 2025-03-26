import { FC } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  InputBase,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
  SelectProps,
  FormControlProps,
  Tooltip,
} from "@mui/material";

type ISelect = SelectProps & {
  label?: string;
  helperText?: string;
  options: { value: string | number; label: string }[];
  parent?: FormControlProps;
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.6),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #E0E3E7",
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
      boxShadow: `${alpha("#537895", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#537895",
    },
  },
}));

const Select: FC<ISelect> = ({
  label,
  helperText,
  parent,
  options,
  ...props
}) => {
  return (
    <FormControl variant="standard" {...parent}>
      {label && (
        <Tooltip title={label}>
          <InputLabel shrink>{label}</InputLabel>
        </Tooltip>
      )}
      <MuiSelect {...props} input={<BootstrapInput />}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
