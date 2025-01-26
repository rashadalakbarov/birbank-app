import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Input Field
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

    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",  // default color
          "&:hover": {
            backgroundColor: "var(--theme-color-light)",
          },
          fontSize: "13px",
          textTransform: "none", 
          borderRadius: "8px", 
          padding: "10px 16px",
          height: "45px",
          color: "#fff",
        },
      },
    },

    // List Item
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize:"12px",
          marginBottom: "0",
        },
        sticky: {
          backgroundColor: '#1565c0', // Background in Sticky Mdde
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '20px',
          marginRight: "-15px",
          '&:hover': {
            color: '#fff',
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          // Default Settings
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'var(--theme-color-light)',
          },
          '&.Mui-selected': {
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          },
        },
      },
    },
  },
});

export default theme;
