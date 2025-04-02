import {promises as fs} from'fs'
import { parse as csvParse } from 'csv-parse';
import { stringify as  csvstringify } from 'csv-stringify';
// hon klche packging file methods ba3mlo import 

export async function readCsvFile(filePath: string,includeHeader: boolean =false): Promise<string[][]> {
// hon 3am n5don ka array of string ba3den mn3mel methods bt7wloun la objects 
    try { 
        const fileContent = await fs.readFile(filePath, 'utf8');

    return new Promise(async (resolve, reject) => {
        
            csvParse(fileContent, { 
                trim: true ,
                skip_empty_lines: true 

            }, (err, records : string[][]) => {
                if (err) {
                    reject(err);
                } else {
                    if (!includeHeader)  records.shift();
                        // Remove the first row if includeHeader is false
                       
                                        resolve(records);
                }
            });
        } 
    );


}



    catch (error) {
       throw new Error(`Error reading CSV file: ${error}`);
    }
}

export async function writeCsvFile(filePath: string, data: string[][]): Promise<void> {
        try {
    const csvContent =await new Promise<string>((resolve, reject) => {
               
               csvstringify(data, (err, output) => {
                    if (err) reject(err);
                    resolve(output);
                     
                });
            } 
        );

await fs.writeFile(filePath,csvContent,'utf8');
}


    catch (error) {
        throw new Error(`Error writing  CSV file: ${error}`);
    }
}
