

import { FurnitureBuilder } from "../../src/model/builders/Furniture.build";

describe('FurnitureBuilder.build', () => {
    it('should build a furniture with default properties', () => {
        const furniture = new FurnitureBuilder();
furniture.setType('Test Book')
    .setMaterial('Test Author')
    .setColor('Fiction')
    .setSize('Hardcover')
    .setStyle('English')
    .setAssemblyRequired('Test Publisher')
    .setWarranty('None')
    


    const furniturebuild = furniture.build();
        expect(furniturebuild ).toBeDefined();

        

       
        
    });

    it('furniture with missing properties', () => {
        const furniture = new FurnitureBuilder();
        furniture.setType('Test Book')
            .setMaterial('Test Author')
            .setColor('Fiction')
            .setSize('Hardcover')
            .setStyle('English')
            .setAssemblyRequired('Test Publisher');
            
            
            expect(() => { furniture.build(); }).toThrow();

    });

});