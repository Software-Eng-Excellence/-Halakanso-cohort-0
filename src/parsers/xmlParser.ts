import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise, Builder } from 'xml2js';


    // Method to read and parse XML file to an object
    export async function readXMLFile<T extends object>(filePath: string): Promise<T> {
        try {
            const xmlData = fs.readFileSync(filePath, 'utf-8');
            const parsedObject = await parseStringPromise(xmlData);
            return parsedObject as T;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error reading or parsing XML file: ${error.message}`);
            } else {
                throw new Error('Error reading or parsing XML file: Unknown error');
            }
        }
    }
    

    
