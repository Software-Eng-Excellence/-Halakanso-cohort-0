  import { Item, ItemCategory } from "./item.model";


   export class Pet implements Item {



   
    private productType: string;
    private petType: string;
    private brand: string;
    private size: string;
    private flavor: string;
    private ecoFriendly: string;
  
    constructor(
        productType: string,
        petType: string,
        brand: string,
        size: string,
        flavor: string,
        ecoFriendly: string,
      
    ) {
        this.productType = productType;
        this.petType = petType;
        this.brand = brand;
        this.size = size;
        this.flavor = flavor;
        this.ecoFriendly = ecoFriendly;
       
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

   

    getCategory(): ItemCategory {
        return ItemCategory.PET;
    }  
    
    

   }