import { Toy } from "../Toy.model";
import logger from "../../util/logger";

export class ToyBuilder {
    private type!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: string;
    private educational!: string;



    public setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }
    

    public setAgeGroup(ageGroup: string): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
    }

    public setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }

    public setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    public setBatteryRequired(batteryRequired: string): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }

    public setEducational(educational: string): ToyBuilder {
        this.educational = educational;
        return this;
    }

    public static  newbuilder():ToyBuilder{
        return new ToyBuilder();
    }

    public build(): Toy {
        const requiredFields = [
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        ];
        for (const field of requiredFields) {
            if (!field) {
                logger.error("Missing required field: " + field);
                throw new Error("Missing required field: " + field);
            }
        }
        return new Toy(
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        );
    }
  


   }