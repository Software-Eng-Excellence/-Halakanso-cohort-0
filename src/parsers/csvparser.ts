import {promises as fs} from'fs'
import { parse as csvParse } from 'csv-parse';
import { stringify as  csvstringify } from 'csv-stringify';
// hon klche packging file methods ba3mlo import 
/** 
@parm filePath: string, includeHeader: boolean = false 

@description: This function reads a CSV file and returns its content as an array of strings.
It uses the csv-parse library to parse the CSV content.
*/

export async function readCsvToObject(filePath: string, includeHeader: boolean = false): Promise<object> {
    const content = await fs.readFile(filePath, 'utf8');
    return new Promise((resolve, reject) => {
      try {
        csvParse(content, { columns: includeHeader }, (err, records) => {
            if (err) {
                // Providing a clear error message when the CSV file is malformatted
                reject(new Error(`CSV file is malformatted: ${err.message}`));
            } else {
                resolve(records);
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