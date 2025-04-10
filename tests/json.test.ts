import { readAndParseJSON } from '../src/parsers/jsonParser';
import fs from 'fs';
import os from 'os';
import path from 'path';

describe('JSON Parser', () => {
    // Utility to create a temporary JSON file with given content.
    const createTempFile = (content: string): string => {
        const tmpDir = os.tmpdir();
        const filePath = path.join(tmpDir, `test-${Date.now()}-${Math.random()}.json`);
        fs.writeFileSync(filePath, content, 'utf8');
        return filePath;
    };

    it('should correctly parse valid JSON content', async () => {
        const validJSON = `{
            "Order ID": "4001",
            "Product Type": "Bedding"
        }`;
        const tempFile = createTempFile(validJSON);
        const result = await readAndParseJSON(tempFile);

        expect(result).toEqual({
            "Order ID": "4001", 
            "Product Type": "Bedding",});
    
    });

    it('should throw error for invalid JSON format', async () => {
        // Missing closing brace
        const invalidJSON = `{
            "Order ID": "4001",
            "Product Type": "Bedding",
        `;
        const tempFile = createTempFile(invalidJSON);
        await expect(readAndParseJSON(tempFile)).rejects.toThrow();
    });

    it('should handle JSON with missing fields', async () => {
        // Valid JSON missing the "Product Type" field.
        const incompleteJSON = `{
            "Order ID": "4001"
        }`;
        const tempFile = createTempFile(incompleteJSON);
        const result = await readAndParseJSON(tempFile);
    
       
        expect(result['Product Type']).toBeUndefined();
    });

    test('should resolve to null for an empty file', async () => {
        const tempFile = createTempFile('');
                await expect(readAndParseJSON(tempFile)).resolves.toBeNull();

        // Check that the result is null
    } );
});
