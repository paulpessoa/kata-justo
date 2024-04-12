import React, { useEffect, useState } from 'react';
import { Typography, Button, Stack, Box, Skeleton, Container, Chip } from "@mui/material"
import OrderCard from "components/OrderCard"
import { useOrderStore } from 'store';
import { getOrder } from "services"
import { useRouter } from 'next/router';

const CartPage = () => {
    const router = useRouter();
    const { ordersList, setOrdersList, selectedItems, setSelectedItems } = useOrderStore();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const orderCount = selectedItems.length;
    const orderText = orderCount === 1 ? 'Orden' : 'Ordenes';

    const handleRedirectToHome = () => {
        router.push('/');
    };

    const handleRedirectToConfirm = () => {
        router.push('/confirm');
        setSelectedItems([]);
    };

    const handleSelectOrder = (orderId: any) => {
        const selectedIndex = selectedItems.indexOf(orderId);
        if (selectedIndex === -1) {
            setSelectedItems([...selectedItems, orderId]);
        } else {
            const newSelectedItems = [...selectedItems];
            newSelectedItems.splice(selectedIndex, 1);
            setSelectedItems(newSelectedItems);
        }
    };

    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const response = await getOrder();
            if (response.error) {
                setOrdersList([]);
                setIsError(true);
            } else {
                setOrdersList(response.data);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("ERROU", error);
            setOrdersList([]);
            setIsLoading(false);
            setIsError(true);
        }
    };

    const handleRetry = () => {
        fetchOrders();
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    
    useEffect(() => {
        const title = orderCount >= 1 ? `: ${orderCount} ${orderText}` : ' - Vale!!';
        document.title = 'Kata Justo' + title;
    }, [orderCount]);




    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: "100vh" }}>
                <Stack gap={2} sx={{ width: "375px", color: "#ffffff", justifyContent: "center" }}>
                    <Box sx={{ width: "375px", color: "#ffffff", justifyContent: "center" }}>
                        {isLoading ? (
                            <Skeleton variant='text' sx={{ width: "100%" }} />
                        ) : (
                            <Stack display="flex" flexDirection="row" gap={2} alignItems="center" justifyContent={"center"}>
                                <Typography sx={{ fontSize: "18px", fontWeight: 700, textAlign: "center" }}>
                                    Ordenes pendientes
                                </Typography>
                                {orderCount > 0 && (
                                    <Chip label={`${orderCount} ${orderText}`} sx={{ backgroundColor: "#AA0000", color: '#ffffff' }} />
                                )}
                            </Stack>
                        )}
                    </Box>
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <Skeleton key={index} height={100} />
                        ))
                    ) : (
                        <>
                            {!isError && ordersList.length >= 1 && ordersList.map((item: any) => (
                                <OrderCard
                                    key={item.id}
                                    data={item}
                                    selected={selectedItems.includes(item.id)}
                                    handleSelect={() => handleSelectOrder(item.id)}
                                />
                            ))}

                            {!isError && ordersList.length >= 1 && (
                                <Button
                                    onClick={handleRedirectToConfirm}
                                    variant="contained"
                                    disabled={orderCount === 0}
                                    sx={{
                                        color: "#000000",
                                        backgroundColor: "#FACE39",
                                        "&:hover": {
                                            backgroundColor: "#d6a400"
                                        },
                                        "&:disabled": {
                                            backgroundColor: "#686868"
                                        }

                                    }}
                                >
                                    Completar orden
                                </Button>
                            )}
                        </>
                    )}
                </Stack>
                {(ordersList.length === 0 || isError && !isLoading) && (
                    <Box mt={2} sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
                        <Typography variant="subtitle2" textAlign="center" mb={1} color="warning.light">Por fa, intenta nuevamente.</Typography>
                        <Button
                            disabled={isLoading}
                            variant="contained"
                            sx={{
                                color: "#fffff",
                                backgroundColor: "#FACE39",
                                "&:hover": {
                                    backgroundColor: "#d6a400"
                                },
                            }}
                            onClick={handleRetry}
                        >
                            Reintentar
                        </Button>
                    </Box>
                )}
                <Box mt={2} sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#686868", color: "#ffffff", "&:hover": {
                                backgroundColor: "#454545"
                            },
                        }}
                        onClick={handleRedirectToHome}
                    >
                        Inicio
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CartPage;
