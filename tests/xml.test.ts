import { readXMLFile } from '../src/parsers/xmlParser';
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
        const validXML = `<row>
            <OrderID>5001</OrderID>
         <Type>Plush Toy</Type>
        </row>`;
        
    const tempFile = createTempFile(validXML);
    const result = await readXMLFile<any>(tempFile);
    expect(result.row).toEqual({ OrderID: ["5001"], Type: ["Plush Toy"] });
        
    
    }
    );
    
it('should throw error for invalid XML format', async () => {
        // Missing closing tag for <heading>
        const invalidXML =`<row>
            <OrderID>5001</OrderID>
            <Type>Plush Toy</Type>  
        </row`;
        
        const tempFile = createTempFile(invalidXML);
        await expect(readXMLFile(tempFile)).rejects.toThrow();
    });

    it('should handle XML with empty fields', async () => {
     // XML missing the <Qunatity> field.
const incompleteXML = `<row>
<OrderID>5001</OrderID>
<Type></Type>
</row>`;

const tempFile = createTempFile(incompleteXML);
const result = await readXMLFile<any>(tempFile);

 
// Assert that a missing field is undefined
expect(result.row.type).toBeUndefined();
    });

    test('should throw error for an empty file', async () => {
        const tempFile = createTempFile('');
        await expect(readXMLFile(tempFile)).resolves.toBeNull();
    });
});

