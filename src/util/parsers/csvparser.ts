import {promises as fs} from'fs'
import { parse as csvParse } from 'csv-parse';
import { stringify as  csvstringify } from 'csv-stringify';
// hon klche packging file methods ba3mlo import 
/** 
@parm filePath: string, includeHeader: boolean = false 

@description: This function reads a CSV file and returns its content as an array of strings.
It uses the csv-parse library to parse the CSV content.
*/

export async function readCsvFile(filePath: string, includeHeader: boolean = false): Promise<string[][]> {
    const content = await fs.readFile(filePath, 'utf8');
    return new Promise((resolve, reject) => {
        try {
            csvParse(content, { trim: true, skip_empty_lines: true }, (err, records: string[][]) => {
                if (err) {
                    reject(new Error(`CSV file is malformatted: ${err.message}`));
                } else {
                    // Remove the header row if includeHeader is false
                    if (!includeHeader) {
                        records.shift();
                    }

                    // Preprocess and validate the data
                    const processedRecords = records.map((row, rowIndex) => {
                        if (row.length < 15) {
                            throw new Error(`Row ${rowIndex + 1} is missing required fields.`);
                        }

                        // Ensure numeric fields are properly converted
                        const size = parseInt(row[4]);
                        const layers = parseInt(row[5]);
                        const price = parseFloat(row[15]);
                        const quantity = parseInt(row[16]);

                        // Debugging logs
                        console.log(`Processing Row ${rowIndex + 1}:`, row);
                        console.log(`Size: ${size}, Layers: ${layers}, Price: ${price}, Quantity: ${quantity}`);

                        if (isNaN(size) || isNaN(layers) || isNaN(price) || isNaN(quantity)) {
                            throw new Error(`Row ${rowIndex + 1} contains invalid numeric values.`);
                        }

                        // Ensure all fields are trimmed and non-empty
                        row = row.map((field, index) => {
                            if ((!field || field.trim() === "")&& index !== 10) {
                                throw new Error(`Field at index ${index} in row ${rowIndex + 1} is empty.`);
                                
                            }


                            if (index === 10 && field.trim() === "") {
                                field = "nothing";
                            }
                            return field.trim();
                        });

                        return row;
                    });

                    resolve(processedRecords);
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                reject(new Error(`Error reading or parsing CSV file: ${error.message}`));
            } else {
                reject(new Error('Error reading or parsing CSV file: Unknown error'));
            }
        }
    });
}
