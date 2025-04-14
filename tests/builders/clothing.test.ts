import {ClothingBuilder } from "../../src/model/builders/Clothing.builder";

describe('ClothingBuilder.build', () => {
    it('should build a clothing  with default properties', () => {
        const clothing= new ClothingBuilder() ;
clothing.setClothingType('Test Book')
    .setSize('Test Author')
    .setColor('Fiction')
    .setMaterial('Hardcover')
    .setPattern('English')
    .setBrand('Test Publisher')
    .setGender('None')
    .setPackaging('Box')
    .setSpecialRequest('None');
  


    const clothingbuild = clothing.build();
        expect(clothingbuild ).toBeDefined();

        

       
        
    });

    it('clothing with missing properties', () => {
        const clothing = new ClothingBuilder ;
        clothing.setClothingType('Test Book')
            .setSize('Test Author')
            .setColor('Fiction')
            .setMaterial('Hardcover')
            .setPattern('English')
            .setBrand('Test Publisher')
            .setGender('None')
            .setPackaging('Box');
            
            expect(() => { clothing.build(); }).toThrow();

    });

});