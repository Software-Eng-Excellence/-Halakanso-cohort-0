import * as fs from 'fs';
import { parseStringPromise } from 'xml2js';

export async function parseXmlTo2DArray(filePath: string): Promise<string[][]> {
    try {
        const xmlData = fs.readFileSync(filePath, 'utf-8');
        const parsed = await parseStringPromise(xmlData);
        const rows: string[][] = [];

        // Determine the root key of the XML
        const rootKey = Object.keys(parsed)[0];

        // Process rows if they exist under the root element
        if (parsed[rootKey] && parsed[rootKey].row) {
            const rowArray = Array.isArray(parsed[rootKey].row) ? parsed[rootKey].row : [parsed[rootKey].row];
            rowArray.forEach((rowObj: any, rowIndex: number) => {
                // Convert named child elements into an array of their values
                const row = Object.values(rowObj).map((value: any) => {
                    if (Array.isArray(value) && value.length > 0) {
                        return String(value[0]); // Extract the value from the array
                    }
                    return String(value);
                });

                if (row.length === 0) {
                    throw new Error(`Row at index ${rowIndex} does not contain any valid elements.`);
                }

                rows.push(row);
            });
        } else {
            throw new Error(`The XML structure does not contain "row" elements under the root key "${rootKey}".`);
        }

        return rows;
    } catch (error: any) {
        throw new Error(`Error parsing XML file: ${error.message || error}`);
    }
}
