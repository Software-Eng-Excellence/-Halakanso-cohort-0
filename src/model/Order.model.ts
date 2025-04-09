
import { Item } from './item.model';


 export interface order {
    getId(): string;
    getitem(): Item;
    getprice(): number;
    getQuantity(): number;

}



