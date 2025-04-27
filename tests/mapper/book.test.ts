import { BookMapper } from "../../src/mappers/Book.mapper";

describe('bookbuilder.build', () => {
    it('should map a book with default properties', () => {
        const cakemap= new  BookMapper();
        const book=cakemap.map(['1', 'Book', 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4']);
        expect(book).toBeDefined();
    });

    it('book with missing properties', () => {
        const cakemap = new BookMapper();
        const data = ['1', 'Hardcover', 'English', 'Scribner', 'Yes', '50', '4'];

        expect(() => {
            cakemap.map(data);
        }).toThrow();
    });

    it('book with invalid properties', () => {
        const cakemap= new  BookMapper();
        const data=['1', 'Book', '', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
             
        expect(() => {cakemap.map(data);
        }).toThrow();
    });

    it('book with null properties', () => {
        const cakemap= new  BookMapper();
        const data :any =['1', 'Book', 'rnmmm', 'F. Scott Fitzgerald', null, 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
             
        expect(() => {cakemap.map(data);
        }).toThrow();
    });

    it('book with undefined properties', () => {
        const cakemap= new  BookMapper();
        const data :any =['1', 'Book', 'rnmmm', 'F. Scott Fitzgerald', undefined, 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
             
        expect(() => {cakemap.map(data);
        }).toThrow();
    });
});