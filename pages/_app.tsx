import React from "react";
import { Box } from "@mui/material";
import { AppProps } from "next/app";
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{backgroundColor: "#212121", display: "flex", flexDirection:"column", alignContent: "center", alignItems: "center", minHeight: "100vh"}}>
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
