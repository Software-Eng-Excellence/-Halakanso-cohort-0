
import logger from "./util/logger";
// ./ because  index.ts using the path 
import { readCsvToObject} from "./parsers/csvparser";
import { readXMLFile } from "./parsers/xmlParser";
import readAndParseJSON from "./parsers/jsonParser"; // Fixed import

async function main() {
    try {
        const data = await readCsvToObject("src/data/cake orders.csv", true);
        Object.values(data).forEach((row, index) => {
            logger.info(`Cake orders CSV data row ${index + 1}:`, row);
        });
    } catch (error) {
        logger.error("Error processing CSV file:", error);
    }

    try {
        const xml = await readXMLFile("src/data/toy orders.xml");
        logger.info("Toy orders XML data:", { xml });
    } catch (error) {
        logger.error("Error processing XML file:", error);
    }

    try {
        const json = await readAndParseJSON("src/data/pet orders.json");
        logger.info("Pet orders JSON data:", { json });
    } catch (error) {
        logger.error("Error processing JSON file:", error);
    }
}

main();