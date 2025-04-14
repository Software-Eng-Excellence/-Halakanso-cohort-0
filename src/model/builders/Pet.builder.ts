import logger from "../../util/logger";
import { Pet } from "../Pet.model";



export class PetBuilder {
    private productType!: string;
    private petType!: string;
    private brand!: string;
    private size!: string;
    private flavor!: string;
    private ecoFriendly!: string;

    public setProductType(productType: string): PetBuilder {
        this.productType = productType;
        return this;
    }

    public setPetType(petType: string): PetBuilder {
        this.petType = petType;
        return this;
    }

    public setBrand(brand: string): PetBuilder {
        this.brand = brand;
        return this;
    }

    public setSize(size: string): PetBuilder {
        this.size = size;
        return this;
    }

    public setFlavor(flavor: string): PetBuilder {
        this.flavor = flavor;
        return this;
    }

    public setEcoFriendly(ecoFriendly: string): PetBuilder {
        this.ecoFriendly = ecoFriendly;
        return this;
    }

    public build(): Pet {
        
const requiredFields = [
            this.productType,
            this.petType,
            this.brand,
            this.size,
            this.flavor,
            this.ecoFriendly
        ];
        for (const field of requiredFields) {
            if (!field) {
                logger.error("Missing required field: " + field);
                throw new Error("Missing required field: " + field);
            }
        }
        return new Pet(
            this.productType,
            this.petType,
            this.brand,
            this.size,
            this.flavor,
            this.ecoFriendly
        );
  
}}