import { IItem } from "./IItem";
import { Iorder } from "./IOrder";


export class Order implements Iorder {
    private id: string;
    private item: IItem;
    private price: number;
    private quantity: number;

    constructor(id: string, item: IItem, price: number, quantity: number) {
        this.id = id;
        this.item = item;
        this.price = price;
        this.quantity = quantity;
    }

    public getId(): string {
        return this.id;
    }

    public getitem(): IItem {
        return this.item;
    }

    public getprice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }
  
}