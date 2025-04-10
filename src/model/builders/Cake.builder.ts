import logger from "../../util/logger";
import { Cake } from "../Cake.model";

 export class CakeBuilder {
 //! kerml 2akdloun lal proprties 2no 3al akid la7 tkono deffine 
    private type!: string ;
    private flavor!: string;
    private filling!: string;
    private size!: number;
    private layers =1;
    private frostingType!: string;
    private frostingFlavor!: string;
    private decorationType!: string;
    private decorationColor!: string;
    private customMessage!: string;
    private shape!: string;
    private allergies!: string;
    private specialIngredients!: string;
    private packagingType!: string;
    
    public setType(type: string): CakeBuilder {
        this.type = type;
        return this;// that mean return your slef (cakeBuilder)
    }

    public setFlavor(flavor: string): CakeBuilder {
        this.flavor = flavor;
        return this;
    }

    public setFilling(filling: string): CakeBuilder {
        this.filling = filling;
        return this;
    }

    public setSize(size: number): CakeBuilder {
        this.size = size;
        return this;
    }

    public setLayers(layers: number): CakeBuilder {
        this.layers = layers;
        return this;
    }

    public setFrostingType(frostingType: string): CakeBuilder {
        this.frostingType = frostingType;
        return this;
    }

    public setFrostingFlavor(frostingFlavor: string): CakeBuilder {
        this.frostingFlavor = frostingFlavor;
        return this;
    }

    public setDecorationType(decorationType: string): CakeBuilder {
        this.decorationType = decorationType;
        return this;
    }

    public setDecorationColor(decorationColor: string): CakeBuilder {
        this.decorationColor = decorationColor;
        return this;
    }

    public setCustomMessage(customMessage: string): CakeBuilder {
        this.customMessage = customMessage;
        return this;
    }

    public setShape(shape: string): CakeBuilder {
        this.shape = shape;
        return this;
    }

    public setAllergies(allergies: string): CakeBuilder {
        this.allergies = allergies;
        return this;
    }

    public setSpecialIngredients(specialIngredients: string): CakeBuilder {
        this.specialIngredients = specialIngredients;
        return this;
    }

    public setPackagingType(packagingType: string): CakeBuilder {
        this.packagingType = packagingType;
        return this;
    }

   

    Build(): Cake { 

        const requiredFields = [
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.layers,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType,
          
        ];


for (const field of requiredFields) {
    if(!field) {
        logger.error("All fields must be set before building the Cake object.");
        throw new Error("All fields must be set before building the Cake object."); 
    }}

        return new Cake(
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.layers,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType
       
        );
    }
}