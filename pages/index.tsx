
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  const router = useRouter();
  const handleRedirectToCart = () => {
    router.push('/cart');
  };

  return (
    <>
      <Head>
        <title>Kata Justo</title>
        <meta name="description" content="Kata Just Technical Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography sx={{ color: "#ffffff", fontSize: 18 }}>Bienvenido a Kata Justo</Typography>
          <Button onClick={handleRedirectToCart} variant="contained" sx={{
            mt: 2,
            borderRadius: "8px",
            backgroundColor: "#FACE39",
            "&:hover": {
              backgroundColor: "#d6a400"
            },
            color: "#000000"
          }}>Comenzar</Button>
        </Box>
      </Box>
    </>
  )
}
