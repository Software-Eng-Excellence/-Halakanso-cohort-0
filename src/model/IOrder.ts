
import { IItem } from './IItem';


 export interface Iorder {
    getId(): string;
    getitem(): IItem;
    getprice(): number;
    getQuantity(): number;

}



