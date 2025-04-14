

import { CakeBuilder} from "../../src/model/builders/Cake.builder";

describe('CakeBuilder.build', () => {
    it('should build a  cake with default properties', () => {
        const cake= new CakeBuilder();
cake.setType('Test type')
    .setFlavor('Vanilla')
    .setFilling('Chocolate')
    .setSize(10)
    .setLayers(2)
    .setFrostingType('Buttercream')
    .setFrostingFlavor('Strawberry')
    .setDecorationType('Fondant')
    .setDecorationColor('White')
    .setCustomMessage('Happy Birthday!')
    .setShape('Round')
    .setAllergies('None')
    .setSpecialIngredients('Organic')
    .setPackagingType('Box');
    
   


    const cakebuilder = cake.Build();
        expect(cakebuilder).toBeDefined();

        

       
        
    



        

       
        
    });

    it('cake with missing properties', () => {
        const cake= new CakeBuilder();
cake.setType('Test type')
    .setFlavor('Vanilla')
    .setFilling('Chocolate')
    .setSize(10)
    .setLayers(2)
    .setFrostingType('Buttercream')
    .setFrostingFlavor('Strawberry')
    .setDecorationType('Fondant')
    .setDecorationColor('White')
    .setCustomMessage('Happy Birthday!')
    .setShape('Round')
    .setAllergies('None')
    .setSpecialIngredients('Organic')
           
           
            
            
            expect(() => { cake.Build(); }).toThrow();

    });

});