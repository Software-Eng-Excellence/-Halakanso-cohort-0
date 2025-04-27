import { IItem } from "../IItem";
import { Order } from "../Order";

export class OrderBuilder {
    private id!: string;
    private item!: IItem;
    private price!: number;
    private quantity!: number;


    public setId(id: string): OrderBuilder {
        this.id = id;
        return this;
    }

    public setItem(item: IItem): OrderBuilder {
        this.item = item;
        return this;
    }

    public setPrice(price: number): OrderBuilder {
        this.price = price;
        return this;
    }

    public setQuantity(quantity: number): OrderBuilder {
        this.quantity = quantity;
        return this;
    }
    public static newbuilder(): OrderBuilder {
        return new OrderBuilder();}


    public build(): Order {
        if (!this.id || !this.item || this.price <= 0 || this.quantity <= 0 || isNaN(this.price) || isNaN(this.quantity) ) {
            throw new Error("Invalid order data");
        }

        return new Order(this.id, this.item, this.price, this.quantity);
    }
}