import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          width: "fit-content",
          py: 2,
          px: 6,
          bgcolor: "darkgray",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 1)",
          fontSize: "2rem",
          ':hover': {bgcolor: "darkblue"},
        }}
      >
        Amba
      </Typography>
    </Container>
  )
}