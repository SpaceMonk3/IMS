import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
        }}
      >
        <Typography
          sx={{
            width: "fit-content",
            py: 2,
            px: 6,
            color: "secondary.main", // Use theme color
            //color: "primary.main", // Use theme color
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 1)",
            fontSize: "2rem",
            ':hover': {
              bgcolor: "secondary.main", // Use theme color
              color: "primary.main", // Use theme color
            },
          }}
        >
          Amba
        </Typography>
      </Container>
    </ThemeProvider>
  )
}