import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--theme-color-light)", // When hover state
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--theme-color)", // When focus state
              borderWidth: "1px",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "gray", // Default color
          "&.Mui-focused": {
            color: "var(--theme-color)", // When focus state
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",  // default color
          "&:hover": {
            backgroundColor: "var(--theme-color-light)",
          },
          textTransform: "none", 
          borderRadius: "8px", 
          padding: "10px 16px",
          height: "45px"
        },
      },
    },
  },
});

export default theme;
