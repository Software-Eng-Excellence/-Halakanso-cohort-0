
import {  OrderMapper } from "../../src/mappers/Order.mapper";
import { BookMapper } from "../../src/mappers/Book.mapper";
import { IMapper } from "../../src/mappers/IMapper";



describe('toybuilder.build', () => {
    it('should map a book with default properties', () => {
        const data=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        const book=bookorder.map(data);
        expect(book).toBeDefined();
    });

    it('book with empty data ', () => {
//const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map([]);
        }).toThrow();
    });
    it('book with missing price ', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });

    it('book with missing quantity ', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with invalid price ', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', 'n','4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with invalid quantity ', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','n'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with null properties', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', null,'4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with undefined properties', () => {
        const data:any=['1', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', undefined,'4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with empty id', () => {
        const data:any=['', 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with null id', () => {
        const data:any=[null, 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();
    });
    it('book with undefined id', () => {
        const data:any=[undefined, 'Book', 'n', 'F. Scott Fitzgerald', 'Fiction', 'Hardcover', 'English', 'Scribner', 'Yes', '50','4'];
        const bookmapper= new BookMapper();

        const bookorder= new  OrderMapper(bookmapper);
        expect(() => {bookorder.map(data);
        }).toThrow();

    
    });

    it('book with empty item', () => {
        const data: any = ['1', 'n', 'n', 'Scribner', 'Yes', '50', '4'];
        const bookmapper= new BookMapper();
        const bookorder = new OrderMapper(bookmapper);
        expect(() => {
            bookorder.map(data);
        }).toThrow();
    });





});