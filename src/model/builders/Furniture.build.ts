import { Furniture } from "../Furniture.model";
import logger from "../../util/logger";




export class FurnitureBuilder {
    private type!: string ;
    private material: string = "Rattan";
    private color!: string ;
    private size!: string ;
    private style!: string ;
    private assemblyRequired!: string ;
    private warranty!: string ;
    public setType(type: string): FurnitureBuilder {
        this.type = type;
        return this;
    }

    public setMaterial(material: string): FurnitureBuilder {
        this.material = material;
        return this;
    }

    public setColor(color: string): FurnitureBuilder {
        this.color = color;
        return this;
    }

    public setSize(size: string): FurnitureBuilder {
        this.size = size;
        return this;
    }

    public setStyle(style: string): FurnitureBuilder {
        this.style = style;
        return this;
    }

    public setAssemblyRequired(assemblyRequired: string): FurnitureBuilder {
        this.assemblyRequired = assemblyRequired;
        return this;
    }

    public setWarranty(warranty: string): FurnitureBuilder {
        this.warranty = warranty;
        return this;
    }

    public build(): Furniture {
      const requiredFields = [  
            this.type,
            this.material,
            this.color,
            this.size,
            this.style,
            this.assemblyRequired,
            this.warranty
      ];
      for (const field of requiredFields) {
        if (!field) {
            logger.error("All fields are required to build a Furniture object");
            throw new Error("All fields are required to build a Furniture object");

        }

      }
      return new Furniture(
             this.type,
             this.material,
             this.color,
             this.size,
            this.style,
             this.assemblyRequired,
      this.warranty,
      );
    }
    
}