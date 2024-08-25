import { Customer } from './types';
import { Product } from './types';

const customers: Customer[] = [
    {
        id: 1,
        name: 'John Doe',
        address: '123 Main St',
        email: 'dkdkd@example.com',
        description: 'A long-time customer',
    },
    {
        id: 2,
        name: 'Jane Doe',
        address: '123 Main St',
        email: 'dkdkd@example.com',
        description: 'A long-time customer',
    },
    {
        id: 1,
        name: 'Gildong Hong',
        address: '111 Sejong St',
        email: 'gildonghong@example.com',
        description: 'A long-time customer',
    },
];

const products: Product[] = [
    {
        id: 1,
        name: 'Widget',
        price: 10,
        description: 'A small widget',
    },
    {
        id: 2,
        name: 'SuperWidget',
        price: 100,
        description: 'A large widget',
    },
    {
        id: 3,
        name: 'MegaWidget',
        price: 1000,
        description: 'A huge widget',
    },
];

const databaseA = {
    customers,
    products,
};

export default databaseA;