import { Item ,ItemCategory} from "./item.model";


export class Clothing implements Item {

    private clothingType: string;
    private size: string;
    private color: string;
    private material: string;
    private pattern: string;
    private brand: string;
    private gender: string;
    private packaging: string;
    private specialRequest: string;
   

    constructor(
        clothingType: string,
        size: string,
        color: string,
        material: string,
        pattern: string,
        brand: string,
        gender: string,
        packaging: string,
        specialRequest: string,
       
    ) {
        this.clothingType = clothingType;
        this.size = size;
        this.color = color;
        this.material = material;
        this.pattern = pattern;
        this.brand = brand;
        this.gender = gender;
        this.packaging = packaging;
        this.specialRequest = specialRequest;
       
    }

    getClothingType(): string {
        return this.clothingType;
    }

    getSize(): string {
        return this.size;
    }

    getColor(): string {
        return this.color;
    }

    getMaterial(): string {
        return this.material;
    }

    getPattern(): string {
        return this.pattern;
    }

    getBrand(): string {
        return this.brand;
    }

    getGender(): string {
        return this.gender;
    }

    getPackaging(): string {
        return this.packaging;
    }

    getSpecialRequest(): string {
        return this.specialRequest;
    }

    

getCategory ():ItemCategory
{
    return ItemCategory.CLOTHES;
}
}
 

