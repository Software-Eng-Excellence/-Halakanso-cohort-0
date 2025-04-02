import logger from "./util/logger";
// ./ because  index.ts using the path 
import { readCsvFile } from "./util/parser";
async function main() {
const data = await readCsvFile("src/data/cake orders.csv",true ) ;
// for each data row, log the row 
data.forEach((row) => 
    logger.info(row) // log each row
);

}
main();

// my process it read the csv file so should write the path src/data/cake orders.csv