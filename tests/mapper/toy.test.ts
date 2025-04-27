import { ToyMapper } from "../../src/mappers/Toy.mapper";

describe('toybuilder.build', () => {
    it('should map a book with default properties', () => {
        const toymapper= new  ToyMapper();
        const toy=toymapper.map(['1', 'Toy', 'Lego Set', 'Lego', 'Plastic', 'yes', 'Yes', '100', '4']);
        expect(toy).toBeDefined();
    });

    it('book with missing properties', () => {
        const toymapper = new ToyMapper();
        const data=(['1',  'Plastic', 'yes', 'Yes', '100', '4']);

        expect(() => {
            toymapper.map(data);
        }).toThrow();
    });

    it('book with invalid properties', () => {
        const toymapper = new ToyMapper();
        const data=['1', '', 'Lego Set', 'Lego', 'Plastic', 'yes', 'Yes', '100', '4'];

        expect(() => {
            toymapper.map(data);
        }).toThrow();
    });

    it('book with null properties', () => {
        const toymapper = new ToyMapper();
        const data: any=['1', '', 'Lego Set', 'Lego', null, 'yes', 'Yes', '100', '4'];

        expect(() => {
            toymapper.map(data);
        }).toThrow();
    });

    it('book with undefined properties', () => {
        const toymapper = new ToyMapper();
        const data:any=['1', '', 'Lego Set', 'Lego', undefined, 'yes', 'Yes', '100', '4'];

        expect(() => {
            toymapper.map(data);
        }).toThrow();
    });
});