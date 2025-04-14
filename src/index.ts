import logger from "./util/logger";
import { CakeBuilder } from "./model/builders/Cake.builder";
import { BookBuilder } from "./model/builders/Book.builder";
import { ClothingBuilder } from "./model/builders/Clothing.builder";
import { FurnitureBuilder } from "./model/builders/Furniture.build";
import { PetBuilder } from "./model/builders/Pet.builder";
import { ToyBuilder } from "./model/builders/Toy.builder";


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

const  bookbuilder = new BookBuilder();
const book = bookbuilder
    .setBookTitle("Your Book Title")
    .setAuthor("Author Name")
    .setGenre("Genre")
    .setFormat("Format")
    .setLanguage("Language")
    .setPublisher("Publisher")
    .setSpecialEdition("Special Edition")
    .setPackaging("Packaging")
    .build();

console.log(book);
logger.info('Book created successfully:', book);

const clothingbuilder = new ClothingBuilder();
const clothing = clothingbuilder.setClothingType('T-Shirt')
    .setSize('M')
    .setColor('Red')
    .setMaterial('Cotton')
    .setPattern('Striped')
    .setBrand('Nike')
    .setGender('Unisex')
    .setPackaging('Box')
    .setSpecialRequest('None')
    .build();

console.log(clothing);
logger.info('Clothing created successfully:', clothing);

const furniturebuilder = new FurnitureBuilder();
const furniture = furniturebuilder.setType('Chair')
    .setMaterial('Wood')
    .setColor('Brown')
    .setSize('Medium')
    .setStyle('Modern')
    .setAssemblyRequired('Yes')
    .setWarranty('1 Year')
    .build();



console.log(furniture);
logger.info('Furniture created successfully:', furniture);

const petbuilder = new PetBuilder();
const pet = petbuilder
    .setProductType('Animal')
    .setPetType('Dog')
    .setBrand('Purina')
    .setSize('Medium')
    .setFlavor('Chicken')
    .setEcoFriendly('Yes')
    .build();

console.log(pet);
logger.info('Pet created successfully:', pet);


const toybuilder = new ToyBuilder();
const toy = toybuilder
    .setType('Action Figure')
    .setAgeGroup('3-5')
    .setBrand('Hot Toys')
    .setMaterial('Plastic')
    .setBatteryRequired('No')
    .setEducational('Yes')
    .build();

    console.log(toy);
logger.info('Toy created successfully:', toy);








}
main();

