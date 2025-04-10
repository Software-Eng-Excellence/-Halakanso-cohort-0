import * as fs from 'fs/promises';

export async function readAndParseJSON(filePath: string): Promise<any> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        if (!data.trim()) {
            return null;
        }
        const result = JSON.parse(data);
        return result ;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error reading or parsing json file: ${error.message}`);
        } else {
            throw new Error('Error reading or parsing json file: Unknown error');
        }
}


    
    }
    export default readAndParseJSON;
