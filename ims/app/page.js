'use client'

import { 
  Box, 
  Container, 
  Typography, 
  CssBaseline, 
  Button, 
  AppBar, 
  Toolbar, 
  Slide, 
  useScrollTrigger,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Head from 'next/head';
//import React, { createContext } from 'react';
import { motion } from "framer-motion";

export default function Home() {
  const trigger = useScrollTrigger();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            background: "linear-gradient(135deg, #000000 60%, #A91D3A 100%)",
            //padding: 0, // Ensure no padding
            //margin: 0,  // Ensure no margin
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="top"
            sx={{
              position: "fixed", // Position the box at the top
              top: 0, // Align it to the top of the screen
              left: 0, // Align it to the left of the screen
              right: 0, // Align it to the right of the screen
              width: "100%", // Ensure it spans the full width
              minHeight: "8vh",
              paddingTop: "3px",
              bgcolor: "transparent", // Optional: Set a background color
              zIndex: 1100, // Ensure it stays above other content
            }}
          >
            <Typography
              sx={{
                color: "secondary.main", // Use theme color
                fontSize: "2rem",
                fontWeight: "bold",
                py: 2,
                px: 4,
                // ':hover': {
                //   bgcolor: "secondary.main", // Use theme color
                //   color: "primary.main", // Use theme color
                // },
              }}
            >
              Pantrack
            </Typography>

            <Button
              type="button"
              variant="text"
              sx={{
                mt: 3,
                mb: 2,
                ml: 2,
                fontWeight: "bold",
                color: "secondary.main",
                bgcolor: "transparent",
                borderRadius: "10px",
                border: "none",
                "&:hover": {
                  background: "#0d0d0d",
                },
              }}
              whileHover={{ scale: 1 }}
              
            >
              Pricing
            </Button>

            <Button
              type="button"
              variant="text"
              sx={{
                mt: 3,
                mb: 2,
                ml: 2,
                fontWeight: "bold",
                color: "secondary.main",
                bgcolor: "transparent",
                borderRadius: "10px",
                border: "none",
                "&:hover": {
                  background: "#0d0d0d",
                },
              }}
              whileHover={{ scale: 1 }}
            >
              Features
            </Button>

            <Button
              type="button"
              variant="text"
              sx={{
                mt: 3,
                mb: 2,
                ml: "auto",
                mr: 3,
                fontWeight: "bold",
                color: "black",
                bgcolor: "transparent",
                borderRadius: "10px",
                border: "none",
                // "&:hover": {
                //   background: "#b0304a",
                // },
              }}
              whileHover={{ scale: 1 }}
            >
              Login
            </Button>
          </Box>

          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              flexDirection: "column", // Stack children vertically
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "primary.main",
              background: "linear-gradient(45deg, #000000 50%, #A91D3A 100%)",
            }}
          >
            <Typography
              sx={{
                width: "fit-content",
                py: 2,
                px: 6,
                //color: "secondary.main", // Use theme color
                //color: "primary.main", // Use theme color
                // borderRadius: "10px",
                // boxShadow: "0 0 10px rgba(50, 50, 50, 1)",
                fontSize: "4rem",
                mb: "2",
                // ':hover': {
                //   bgcolor: "secondary.main", // Use theme color
                //   color: "primary.main", // Use theme color
                // },
                background: "linear-gradient(42deg, #A91D3A 49%, #000000 54%)", // Define your gradient colors
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text", // This is for non-webkit browsers (not widely supported yet)
                textFillColor: "transparent",
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              //whileHover={{ scale: 1.2 }}
            >
              Pantry Management Simplified
            </Typography>

            <Typography
              sx={{
                width: "fit-content",
                py: 2,
                px: 6,
                color: "lightslategray", // Use theme color
                //color: "primary.main", // Use theme color
                // borderRadius: "10px",
                // boxShadow: "0 0 10px rgba(50, 50, 50, 1)",
                fontSize: "1.5rem",
                // ':hover': {
                //   bgcolor: "secondary.main", // Use theme color
                //   color: "primary.main", // Use theme color
                // },
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              Harness the power of AI to track, manage, & get insights about your pantry
            </Typography>

            <Button
              type="button"
              variant="contained"
              sx={{
                mt: 5,
                background: "#A91D3A",
                color: "black",
                borderRadius: "10px",
                "&:hover": {
                  background: "#C73659",
                },
                boxShadow: "0px 0px 3px 3px rgba(69, 14, 26,0.5)",
              }}
              component={motion.button}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now!
            </Button>
          </Box>  
        </Box>
      </ThemeProvider>
    </>
  )
}