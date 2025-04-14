import {Item, ItemCategory} from "./item.model"


export class Furniture implements Item {


    private type: string ;
    private material: string; 
    private color: string ;
    private size: string ;
    private style: string ;
    private assemblyRequired: string ;
    private warranty: string ;



    constructor(
        type: string,
        material: string,
        color: string,
        size: string,
        style: string,
        assemblyRequired: string,
        warranty: string
    ) {
        this.type = type;
        this.material = material;
        this.color = color;
        this.size = size;
        this.style = style;
        this.assemblyRequired = assemblyRequired;
        this.warranty = warranty;
    }
   

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

   
getCategory(): ItemCategory {
    
    return ItemCategory.FURNITURE
}
}