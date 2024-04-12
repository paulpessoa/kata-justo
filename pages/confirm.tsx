import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

const ConfirmationPage = () => {
    const router = useRouter();
    const handleRedirectToHome = () => {
        router.push('/');
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Typography fontSize={18} align="center" color="white" mb={2}>
                Tu orden ha sido confirmada.
            </Typography>
            <Button sx={{
                borderRadius: "8px",
                color: "#000000",
                backgroundColor: "#FACE39",
                "&:hover": {
                    backgroundColor: "#d6a400"
                },
            }} variant="contained" onClick={handleRedirectToHome}>
                Volver al inicio
            </Button>
        </Box>
    );
};

export default ConfirmationPage;
