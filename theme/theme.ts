import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FF6666", // When hover state
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--red)", // When focus state
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
            color: "var(--red)", // When focus state
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "var(--red)",
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
