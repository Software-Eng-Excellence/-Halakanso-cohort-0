

import { ToyBuilder} from "../../src/model/builders/Toy.builder";

describe('ToyBuilder.build', () => {
    it('should build a  toy with default properties', () => {
        const toy= new ToyBuilder();
toy.setType('Test type')
    .setAgeGroup('Test group')
    .setBrand('Test brand') 
    .setMaterial('Test material')
    .setBatteryRequired('yes')
    .setEducational('yes');
   


   


    const toybuilder = toy.build();
        expect(toybuilder).toBeDefined();

        

       
        
    });

    it('Toy with missing properties', () => {
        const toy= new ToyBuilder();
        toy.setType('Test type')
            .setAgeGroup('Test group')
            .setBrand('Test brand') 
            .setMaterial('Test material')
            .setBatteryRequired('yes')
            
        
           
           
            
            
            expect(() => { toy.build(); }).toThrow();

    });

});