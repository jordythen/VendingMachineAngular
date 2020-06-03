import { SnackType } from './snacktype';

export class Snack {

    id: number;
    isHidden: string;
    snackName: string;
    description: string;
    numInStock: number;
    cost: number;
    types: SnackType[];
    totalFat: number;
    totalCarbs: number;
    sodium: number;
    cholesterol: number;
}
