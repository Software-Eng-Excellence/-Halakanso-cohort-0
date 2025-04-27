import { IItem , ItemCategory} from "./IItem";


export class Toy implements IItem {

  
    private type: string;
    private ageGroup: string;
    private brand: string;
    private material: string;
    private batteryRequired:string;
    private educational:string;
   

    constructor(
        type: string,
        ageGroup: string,
        brand: string,
        material: string,
        batteryRequired:string,
        educational:string
      
    ) {
    
        this.type = type;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.batteryRequired = batteryRequired;
        this.educational = educational;
        
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

    public isBatteryRequired():string {
        return this.batteryRequired;
    }

    public isEducational():string {
        return this.educational;
    }

    


 getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }  
    
    



}