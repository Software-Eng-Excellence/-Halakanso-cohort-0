import {Item, ItemCategory} from "./item.model"


export class Furniture implements Item {


    private type: string = "Table";
    private material: string = "Rattan";
    private color: string = "Blue";
    private size: string = "Extra Large";
    private style: string = "Modern";
    private assemblyRequired: string = "No";
    private warranty: string = "2 Years";
    private price: number = 380;
    private quantity: number = 1;

    public getType(): string {
        return this.type;
    }

    public getMaterial(): string {
        return this.material;
    }

    public getColor(): string {
        return this.color;
    }

    public getSize(): string {
        return this.size;
    }

    public getStyle(): string {
        return this.style;
    }

    public getAssemblyRequired(): string {
        return this.assemblyRequired;
    }

    public getWarranty(): string {
        return this.warranty;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }
getCategory(): ItemCategory {
    
    return ItemCategory.FURNITURE
}
}