import { Toy } from "../model/Toy.model";
import { IMapper } from "./IMapper";
import { ToyBuilder } from "../model/builders/Toy.builder";


export class ToyMapper implements IMapper<string[],Toy>{
    public map(data:string[]):Toy{
return ToyBuilder.newbuilder()
                 .setType(data[1])
                 .setAgeGroup(data[2])
                 .setBrand(data[3])
                 .setMaterial(data[4])
                 .setBatteryRequired(data[5])
                 .setEducational(data[6])
                 .build();

            
    }
}