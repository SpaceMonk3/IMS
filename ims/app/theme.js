'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#151515",
      },
      secondary: {
        main: "#A91D3A",
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 400,
    },
  });

export default theme;