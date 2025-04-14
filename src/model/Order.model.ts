
import { Item } from './item.model';


 export interface order {
    getId(): string;
    getitem(): Item;//rabtet 7ale bl inteface item 
    getprice(): number;
    getQuantity(): number;

}



