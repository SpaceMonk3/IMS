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
  Grid,
  Card,
} from "@mui/material";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Head from 'next/head';
//import React, { createContext } from 'react';
import { motion } from "framer-motion";
import Dashboard from "./dashboard/page";
import Landing from "./landing/page";

export default function Home() {
  const trigger = useScrollTrigger();

  return (
    <ClerkProvider>
      <SignedOut>
        <Landing/>
      </SignedOut>
      <SignedIn>
        <Dashboard/>
      </SignedIn>
    </ClerkProvider>
  )
}