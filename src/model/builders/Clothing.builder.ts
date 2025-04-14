import { Clothing } from "../Clothing.model";
import logger from "../../util/logger";

export class ClothingBuilder {
    private clothingType!: string;
    private size!: string;
    private color!: string;
    private material!: string;
    private pattern!: string;
    private brand!: string;
    private gender!: string;
    private packaging!: string;
    private specialRequest!: string;

    public setClothingType(clothingType: string): ClothingBuilder {
        this.clothingType = clothingType;
        return this;
    }

    public setSize(size: string): ClothingBuilder {
        this.size = size;
        return this;
    }

    public setColor(color: string): ClothingBuilder {
        this.color = color;
        return this;
    }

    public setMaterial(material: string): ClothingBuilder {
        this.material = material;
        return this;
    }

    public setPattern(pattern: string): ClothingBuilder {
        this.pattern = pattern;
        return this;
    }

    public setBrand(brand: string): ClothingBuilder {
        this.brand = brand;
        return this;
    }

    public setGender(gender: string): ClothingBuilder {
        this.gender = gender;
        return this;
    }

    public setPackaging(packaging: string): ClothingBuilder {
        this.packaging = packaging;
        return this;
    }

    public setSpecialRequest(specialRequest: string): ClothingBuilder {
        this.specialRequest = specialRequest;
        return this;
    }



    public build(): Clothing {
        const requiredFields = [
            this.clothingType,
            this.size,
            this.color,
            this.material,
            this.pattern,
            this.brand,
            this.gender,
            this.packaging,
            this.specialRequest







        ];
        for (const field of requiredFields) {
            if (!field) {
        logger.error("missing field");
            throw new Error("Missing required field");
            }
        }
           
        
    


        return new Clothing(
            this.clothingType,
            this.size,
            this.color,
            this.material,
            this.pattern,
            this.brand,
            this.gender,
            this.packaging,
            this.specialRequest
        );
    }

   
    
    }






