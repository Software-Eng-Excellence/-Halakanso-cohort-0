  import { IItem, ItemCategory } from "./IItem";


   export class Pet implements IItem {



   
    private productType: string;
    private petType: string;
    private brand: string;
    private size: string;
    private flavor: string;
    private ecoFriendly: string;
    private price: string;
    private quantity: string;

    constructor(
        productType: string,
        petType: string,
        brand: string,
        size: string,
        flavor: string,
        ecoFriendly: string,
        price: string,
        quantity: string
    ) {
        this.productType = productType;
        this.petType = petType;
        this.brand = brand;
        this.size = size;
        this.flavor = flavor;
        this.ecoFriendly = ecoFriendly;
        this.price = price;
        this.quantity = quantity;
    }

    

    public getProductType(): string {
        return this.productType;
    }

    public getPetType(): string {
        return this.petType;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getSize(): string {
        return this.size;
    }

    public getFlavor(): string {
        return this.flavor;
    }

    public getEcoFriendly(): string {
        return this.ecoFriendly;
    }

    public getPrice(): string {
        return this.price;
    }

    public getQuantity(): string {
        return this.quantity;
    }

    getCategory(): ItemCategory {
        return ItemCategory.PET;
    }  
    
    

   }