import { Dayjs } from 'dayjs';

export type OrderItem = {
    id: number;
    date: Dayjs;
    zone: {
        name: string;
        url: string;
        color: string;
    };
};
