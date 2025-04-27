import { readAndParseJSON } from '../../src/util/parsers/jsonParser';
import fs from 'fs';
import os from 'os';
import path from 'path';

describe('Additional JSON Parser Tests', () => {
    // Utility to create a temporary JSON file with given content.
    const createTempFile = (content: string): string => {
        const tmpDir = os.tmpdir();
        const filePath = path.join(tmpDir, `test-${Date.now()}-${Math.random()}.json`);
        fs.writeFileSync(filePath, content, 'utf8');
        return filePath;
    };

    it('should throw error for a non-existent file', async () => {
        // Generate a file path that does not exist.
        const fakeFilePath = path.join(os.tmpdir(), `nonexistent-${Date.now()}-${Math.random()}.json`);
        await expect(readAndParseJSON(fakeFilePath)).rejects.toThrow();
    });

    it('should resolve to null for a file with only whitespace', async () => {
        const tempFile = createTempFile('      ');
        await expect(readAndParseJSON(tempFile)).resolves.toEqual([]);
    });

    it('should correctly parse JSON with numeric values', async () => {
        const validJSON = `[{
            "Order ID": 5003,
            "Quantity": 10
        }]`;
        const tempFile = createTempFile(validJSON);
        const result = await readAndParseJSON(tempFile);
        expect(result).toEqual([["5003", "10"]]);
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
});
