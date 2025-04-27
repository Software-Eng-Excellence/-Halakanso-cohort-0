import { readCsvFile } from '../../src/util/parsers/csvparser';
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

    it('should correctly parse a valid CSV file without header', async () => {
        // CSV with a header and one valid data row.
        // The parser expects at least 17 fields per row.
        const validCSV = `"ID","Name","Type","Header1","Size","Layers","Col6","Col7","Col8","Col9","Optional","Col11","Col12","Col13","Col14","Price","Quantity"
"1","Test","Data","Header",12,3,"Val6","Val7","Val8","Val9","", "Val11","Val12","Val13","Val14",15.5,2`;
        const tempFile = createTempFile(validCSV);
        // By default, the header is dropped.
        const result = await readCsvFile(tempFile);
        // We expect only one row since the header is removed.
        expect(result.length).toBe(1);
        expect(result[0][0]).toBe("1");
        
        expect(result[0][4]).toBe("12");      // Size field
        expect(result[0][5]).toBe("3");       // Layers field
        expect(result[0][15]).toBe("15.5");   // Price field
        expect(result[0][16]).toBe("2");      // Quantity field
        
    });


      


    it('should throw error for invalid CSV format', async () => {
        // Malformed CSV (e.g., missing closing quote on a field)
        const invalidCSV = `"Order ID","Product Type","Pet Type","Brand","Size","Flavor","Eco-Friendly","Price","Quantity"
"4001","Bedding","Dog,"PetCare","Extra Large","Fish","No","322","2"`;
        const tempFile = createTempFile(invalidCSV);
        await expect(readCsvFile(tempFile)).rejects.toThrow();
    });

    it('should handle CSV with missing fields', async () => {
        // CSV missing the "Quantity" column, fixed by providing an empty value for Quantity.
        const incompleteCSV = `" order id","Product Type","Pet Type"
        
"4001","Bedding"`;
        const tempFile = createTempFile(incompleteCSV);
       // const result = await readCsvFile(tempFile);


        
 await expect(readCsvFile(tempFile)).rejects.toThrow();

       
    });
    

    test('should resolve to null for an empty file', async () => {
        const tempFile = createTempFile('');
        await expect(readCsvFile(tempFile)).resolves.toEqual([]);
    });
});