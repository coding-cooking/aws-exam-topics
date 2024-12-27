export type productType = {
    name: string;
    description: string;
    image: string;
    handle: string;
    price: string;
    priceId: string;
    quantity: number;
}

export const products = [
    {
        name: 'SAA-C03',
        description: '1000 Exam Topics with comprehensive explanation',
        image: '/saa-c03.jpg',
        handle: 'saa-c03',
        price: '60',
        priceId: 'price_1Qa31QD0b0x5ww07YUTYgxeS'
    },
    {
        name: 'DOP-C02',
        description: '500+ Exam Topics with comprehensive explanation',
        image: '/dop-c02.jpeg',
        handle: 'dop-c02',
        price: '80',
        priceId: 'price_1Qa320D0b0x5ww07hY04922P'
    },
    {
        name: 'SAP-C02',
        description: '800+ Exam Topics with comprehensive explanation',
        image: '/sap-c02.jpeg',
        handle: 'sap-c02',
        price: '120',
        priceId: 'price_1Qa32UD0b0x5ww07GaU2EL4Y'
    },
]