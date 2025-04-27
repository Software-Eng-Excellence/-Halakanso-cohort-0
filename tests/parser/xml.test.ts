import { parseXmlTo2DArray } from '../../src/util/parsers/xmlParser';
import fs from 'fs';
import os from 'os';
import path from 'path';

describe('XML Parser', () => {
    // Utility to create a temporary XML file with given content.
    const createTempFile = (content: string): string => {
        const tmpDir = os.tmpdir();
        const filePath = path.join(tmpDir, `test-${Date.now()}-${Math.random()}.xml`);
        fs.writeFileSync(filePath, content, 'utf8');
        return filePath;
    };

    it('should correctly parse valid XML content', async () => {
        const validXML = `<rows>
            <row>
                <OrderID>5001</OrderID>
                <Type>Plush Toy</Type>
            </row>
        </rows>`;
        
    const tempFile = createTempFile(validXML);
    const result = await parseXmlTo2DArray(tempFile);
    expect(result).toEqual( [ [ "5001", "Plush Toy" ] ] );
        
    
    }
    );
    
it('should throw error for invalid XML format', async () => {
        // Missing closing tag for <heading>
        const invalidXML =`<row>
            <OrderID>5001</OrderID>
            <Type>Plush Toy</Type>  
        </row`;
        
        const tempFile = createTempFile(invalidXML);
        await expect(parseXmlTo2DArray(tempFile)).rejects.toThrow();
    });

   
 


    test('should throw error for an empty file', async () => {
        const tempFile = createTempFile('');
        await expect(parseXmlTo2DArray(tempFile)).rejects.toThrow();
    });
});