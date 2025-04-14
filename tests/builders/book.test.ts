import {BookBuilder } from "../../src/model/builders/Book.builder";

describe('BookBuilder.build', () => {
    it('should build a book with default properties', () => {
        const book = new BookBuilder() ;
book.setBookTitle('Test Book')
    .setAuthor('Test Author')
    .setGenre('Fiction')
    .setFormat('Hardcover')
    .setLanguage('English')
    .setPublisher('Test Publisher')
    .setSpecialEdition('None')
    .setPackaging('Box');
    const builtBook = book.build();
        expect(builtBook).toBeDefined();

        

       
        
    });

    it('Book with missing properties', () => {
        const book = new BookBuilder() ;
        book.setBookTitle('Test Book')
            .setAuthor('Test Author')
            .setGenre('Fiction')
            .setFormat('Hardcover')
            .setLanguage('English')
            .setPublisher('Test Publisher')
            .setSpecialEdition('None')
            expect(() => { book.build(); }).toThrow();

    });

});