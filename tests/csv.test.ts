import { readCsvToObject } from '../src/parsers/csvparser';
import fs from 'fs';
import os from 'os';
import path from 'path';

describe('CSV Parser', () => {
    // Utility to create a temporary CSV file with given content.
    const createTempFile = (content: string): string => {
        const tmpDir = os.tmpdir();
        const filePath = path.join(tmpDir, `test-${Date.now()}-${Math.random()}.csv`);
        fs.writeFileSync(filePath, content, 'utf8');
        return filePath;
    };

    it('should correctly parse valid CSV content', async () => {
        // CSV with header and one row.
        const validCSV = `"Order ID","Product Type","Pet Type"
"4001","Bedding","Dog"`;
        const tempFile = createTempFile(validCSV);

        // Explicitly type the result as an array with the header row and the record
        const result = await readCsvToObject(tempFile, true) ;

expect(result).toEqual([{ "Order ID": "4001", "Product Type": "Bedding", "Pet Type": "Dog" }] );

        
      
    });

    it('should throw error for invalid CSV format', async () => {
        // Malformed CSV (e.g., missing closing quote on a field)
        const invalidCSV = `"Order ID","Product Type","Pet Type","Brand","Size","Flavor","Eco-Friendly","Price","Quantity"
"4001","Bedding","Dog,"PetCare","Extra Large","Fish","No","322","2"`;
        const tempFile = createTempFile(invalidCSV);
        await expect(readCsvToObject(tempFile)).rejects.toThrow();
    });

    it('should handle CSV with missing fields', async () => {
        // CSV missing the "Quantity" column.
        const incompleteCSV = `"Order ID","Product Type","Pet Type"
        
"4001","Bedding",`;
        const tempFile = createTempFile(incompleteCSV);
       // const result = await readCsvToObject(tempFile);


        
 await expect(readCsvToObject(tempFile)).rejects.toThrow();

       
    });
    

    test('should resolve to null for an empty file', async () => {
        const tempFile = createTempFile('');
        await expect(readCsvToObject(tempFile)).resolves.toEqual([]);
    });
});
