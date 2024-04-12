import React from 'react';
import { Card, Grid, Typography, Divider } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { OrderItem } from 'types';
import Image from 'next/image';

type OrderData = {
    data: OrderItem
    selected?: boolean
    handleSelect: () => void;
}

const OrderCard = ({ data, selected = false, handleSelect }: OrderData) => {

    function formatDateText(dateValue: Dayjs) {
        return dayjs(dateValue).format("h:mm A");
    }

    return (
        <Card onClick={handleSelect} sx={{ cursor: "pointer", p: 2, maxWidth: 375, backgroundColor: selected ? "#AA0000" : "#212121", border: "1px solid #ffffff" }}>
            <Typography variant="h4" sx={{ textAlign: "left", color: "#ffffff", fontSize: 18 }}># {data.id}</Typography>
            <Divider sx={{ my: 1, backgroundColor: "white" }} />

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <AccessTimeIcon sx={{ color: "#CDCDCD", mr: 1 }} />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ textAlign: "left", color: "#CDCDCD", fontSize: 14 }}>{formatDateText(data.date)}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container alignItems="center" justifyContent="flex-end">
                        <Grid item mr={1}>
                            <Image height={20} width={20} src={data?.zone?.url} alt="Imagem de Congelados" />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ textAlign: "right", color: "#CDCDCD", fontSize: 14 }}>{data.zone.name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default OrderCard;
