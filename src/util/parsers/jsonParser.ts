import * as fs from 'fs/promises';

export async function readAndParseJSON(filePath: string): Promise<string[][]> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        if (!data.trim()) {
            return [];
        }
        const jsonArray = JSON.parse(data);
        if (!Array.isArray(jsonArray)) {
            throw new Error('Expected JSON file to contain an array of objects.');
        }

        // Define keys based on the first JSON object's properties.
        if (jsonArray.length === 0 || typeof jsonArray[0] !== 'object' || jsonArray[0] === null) {
            throw new Error('JSON array does not contain any valid objects.');
        }
        const keys = Object.keys(jsonArray[0]);

        // Map each entry in the JSON array to a row in the 2D array.
        // If a field is missing or empty, it defaults to an empty string.
        const result: string[][] = jsonArray.map((item: any) => {
            if (typeof item === 'object' && item !== null) {
                return keys.map(key => {
                    const field = item[key];
                    // Check for undefined, null or purely whitespace values
                    if (field === undefined || field === null || String(field).trim() === '') {
                        return '';
                    }
                    return String(field);
                });
            } else {
                // Fallback: if the item isn't an object, simply return its string representation in a single element row.
                return [String(item)];
            }
        });
        console.log(JSON.stringify(result, null, 2));
        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error reading or parsing json file: ${error.message}`);
        } else {
            throw new Error('Error reading or parsing json file: Unknown error');
        }
    }
}

export default readAndParseJSON;