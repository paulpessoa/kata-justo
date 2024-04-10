
import React from 'react';
import Head from 'next/head';
import { Typography, Button } from '@mui/material';
import UserList from 'components/UserList';
import { useUserStore } from 'store'

export default function Home() {
  const { resetStore } = useUserStore();

  const handleResetStore = () => {
    resetStore();
  };

  return (
    <>
      <Head>
        <title>Kata Justo</title>
        <meta name="description" content="Kata Just Technical Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Typography>Home</Typography>
        <Button variant="outlined" onClick={handleResetStore}>reset Store</Button>
        <UserList />
      </main>

    </>
  )
}
