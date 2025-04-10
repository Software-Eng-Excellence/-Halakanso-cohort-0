import logger from "./util/logger";
import { CakeBuilder } from "./model/builders/Cake.builder";


async function main() {
const cakebuilder = new CakeBuilder();
const cake=cakebuilder.setType('Birthday')
                .setFlavor('Chocolate')
                .setFilling('Vanilla') 
                .setSize(8)
                .setLayers(2)
                .setFrostingType('Buttercream')
                .setFrostingFlavor('Vanilla')
                .setDecorationType('Sprinkles')
                .setDecorationColor('Red')
                .setCustomMessage('Happy Birthday')
                .setShape('Round')
                .setAllergies('Nuts')
                .setSpecialIngredients('None')
                .setPackagingType('Box')
                .Build();

//const cake =cakebuilder.build()

console.log(cake);
logger.info('Cake created successfully:', cake);




}
main();

