import logger from "./util/logger";
import { readCsvFile } from "./util/parsers/csvparser";
import { CSVCakeMapper } from "./mappers/Cake.mapper";
import { OrderMapper } from "./mappers/Order.mapper";
import { BookMapper } from "./mappers/Book.mapper";
import readAndParseJSON from "./util/parsers/jsonParser";
import {  parseXmlTo2DArray} from "./util/parsers/xmlParser";
import { ToyMapper } from "./mappers/Toy.mapper";


async function main() {
//await it tells the program to pause execution at this line 
// until the readCsvFile function resolves its Promise and returns the data.
    //const data=await readCsvFile("src/data/cake orders.csv",false);
//console.log("data :\n %o",data);

const cakemapper= new CSVCakeMapper();
const ordermaper=new OrderMapper(cakemapper);
//const orders =data.map(ordermaper.map);
// yhe call back of function  map lost the this  in typescript so :
//const orders =data.map(ordermaper.map.bind(ordermaper));
//logger.info( "cake :\n %o",orders);
 

/* The bind method in ordermaper.map.bind(ordermaper) 
is used to explicitly bind the this context of 
the map method to the ordermaper instance.

In JavaScript, 
when a method is passed as a callback (e.g., to Array.map), 
the this context can be lost because the method is called in a different context.
*/
const bookdata= await readAndParseJSON("src/data/book orders.json");
//console.log("bookdata :\n %o",bookdata);
const bookmapper= new BookMapper();
const bookorder = new OrderMapper(bookmapper);
const bookorders = bookdata.map(bookorder.map.bind(bookorder));
logger.info( "book :\n %o",bookorders);
//const toydata= await parseXmlTo2DArray("src/data/toy orders.xml");
//const toymapper=new ToyMapper();
//const toyorder = new OrderMapper(toymapper);
//const toyorders = toydata.map(toyorder.map.bind(toyorder));
//
// logger.info( "toy :\n %o",toyorders);
}
main();

