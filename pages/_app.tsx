import React from "react";
import { Box } from "@mui/material";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Component {...pageProps} />
    </Box>

  );
}

export default MyApp;
