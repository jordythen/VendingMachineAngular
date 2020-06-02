import { Offer } from './offer';
import { Order } from './order';
import { Review } from './review';
import { VendingMachine } from './vendingmachine';


export class User {

    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    balance: number;
    vendingmachine: VendingMachine;
    offers: Offer[];
    orders: Order[];
    reviews: Review[];

}
