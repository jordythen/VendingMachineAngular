import { SnackType } from './snacktype';

export class Snack {

    id: number;
    isHidden: string;
    name: string;
    description: string;
    quantity: number;
    cost: number;
    types: SnackType[];
    totalFat: number;
    totalCarbs: number;
    sodium: number;
    cholesterol: number;
}
