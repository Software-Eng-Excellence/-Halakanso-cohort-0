import { Item , ItemCategory} from "./item.model";


export class Toy implements Item {

  
    private type: string;
    private ageGroup: string;
    private brand: string;
    private material: string;
    private batteryRequired: boolean;
    private educational: boolean;
    private price: number;
    private quantity: number;

    constructor(
        type: string,
        ageGroup: string,
        brand: string,
        material: string,
        batteryRequired: boolean,
        educational: boolean,
        price: number,
        quantity: number
    ) {
    
        this.type = type;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.batteryRequired = batteryRequired;
        this.educational = educational;
        this.price = price;
        this.quantity = quantity;
    }

   
    public getType(): string {
        return this.type;
    }

    public getAgeGroup(): string {
        return this.ageGroup;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getMaterial(): string {
        return this.material;
    }

    public isBatteryRequired(): boolean {
        return this.batteryRequired;
    }

    public isEducational(): boolean {
        return this.educational;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }


 getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }  
    
    



}