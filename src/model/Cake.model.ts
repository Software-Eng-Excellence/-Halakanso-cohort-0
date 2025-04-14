import { Item, ItemCategory } from './item.model';

type Type = 'Birthday' | 'Wedding' | 'Anniversary' | 'Graduation' | 'Baby Shower' | 'Other';
//Fr sicurity reason and data cleaning
 export class Cake implements Item {

   
// hone 3mlton private kerml ma bade 8yer fehon kerml hek 3mltlon constractor 
//immutable object can't change  it 
    private type: string; // TYPE
    private flavor: string;
    private filling: string;
    private size: number;
    private layers: number;
    private frostingType: string;
    private frostingFlavor: string;
    private decorationType: string;
    private decorationColor: string;
    private customMessage: string;
    private shape: string;
    private allergies: string;
    private specialIngredients: string;
    private packagingType: string;
  
    constructor(
        type: string,
        flavor: string,
        filling: string,
        size: number,
        layers: number,
        frostingType: string,
        frostingFlavor: string,
        decorationType: string,
        decorationColor: string,
        customMessage: string,
        shape: string,
        allergies: string,
        specialIngredients: string,
        packagingType: string,
        
    ) {
        this.type = type;
        this.flavor = flavor;
        this.filling = filling;
        this.size = size;
        this.layers = layers;
        this.frostingType = frostingType;
        this.frostingFlavor = frostingFlavor;
        this.decorationType = decorationType;
        this.decorationColor = decorationColor;
        this.customMessage = customMessage;
        this.shape = shape;
        this.allergies = allergies;
        this.specialIngredients = specialIngredients;
        this.packagingType = packagingType;
      
    }

    getCategory(): ItemCategory {
        return ItemCategory.CAKE;
        
    }

    public getType(): string {
        return this.type;
    }
    
    public getFlavor(): string {
        return this.flavor;
    }

    public getFilling(): string {
        return this.filling;
    }

    public getSize(): number {
        return this.size;
    }

    public getLayers(): number {
        return this.layers;
    }

    public getFrostingType(): string {
        return this.frostingType;
    }

    public getFrostingFlavor(): string {
        return this.frostingFlavor;
    }

    public getDecorationType(): string {
        return this.decorationType;
    }

    public getDecorationColor(): string {
        return this.decorationColor;
    }

    public getCustomMessage(): string {
        return this.customMessage;
    }

    public getShape(): string {
        return this.shape;
        
    }

    public getAllergies(): string {
        return this.allergies;
    }

    public getSpecialIngredients(): string {
        return this.specialIngredients;
    }

    public getPackagingType(): string {
        return this.packagingType;
    }

   

}
