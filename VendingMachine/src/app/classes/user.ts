import { VendingMachine } from './vendingmachine';
import { Offer } from './offer';
import { Order } from './order';
import { Review } from './review';


export class User {

    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    balance: number;
    vendingmachine: VendingMachine;
    offers: Offer[];
    orders: Order[];
    reviews: Review[];

}