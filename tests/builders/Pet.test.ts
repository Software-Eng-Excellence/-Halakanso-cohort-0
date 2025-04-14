

import { PetBuilder } from "../../src/model/builders/Pet.builder";

describe('PetBuilder.build', () => {
    it('should build a pet with default properties', () => {
        const pet= new PetBuilder();
pet.setProductType('N')
    .setPetType('Test type')
    .setBrand('Test brand')
    .setSize('test size')
    .setFlavor('test flavor')
    .setEcoFriendly('Test ');
   


   


    const petbuilder = pet.build();
        expect(petbuilder).toBeDefined();

        

       
        
    });

    it('pet with missing properties', () => {
        const pet= new PetBuilder();
        pet.setProductType('N')
            .setPetType('Test type')
            .setBrand('Test brand')
            .setSize('test size')
            .setFlavor('test flavor');
           
           
            
            
            expect(() => { pet.build(); }).toThrow();

    });

});