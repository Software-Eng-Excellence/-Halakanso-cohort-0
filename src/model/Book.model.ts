import { Item, ItemCategory } from './item.model';



export class Book implements Item {




    private bookTitle: string;
    private author: string;
    private genre: string;
    private format: string;
    private language: string;
    private publisher: string;
    private specialEdition: string;
    private packaging: string;
    private price: string;
    private quantity: string;

    constructor(
        bookTitle: string,
        author: string,
        genre: string,
        format: string,
        language: string,
        publisher: string,
        specialEdition: string,
        packaging: string,
        price: string,
        quantity: string
    ) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.genre = genre;
        this.format = format;
        this.language = language;
        this.publisher = publisher;
        this.specialEdition = specialEdition;
        this.packaging = packaging;
        this.price = price;
        this.quantity = quantity;
    }

   

    public getBookTitle(): string {
        return this.bookTitle;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getFormat(): string {
        return this.format;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getPublisher(): string {
        return this.publisher;
    }

    public getSpecialEdition(): string {
        return this.specialEdition;
    }

    public getPackaging(): string {
        return this.packaging;
    }

    public getPrice(): string {
        return this.price;
    }

    public getQuantity(): string {
        return this.quantity;
    }
getCategory(): ItemCategory {
    return ItemCategory.BOOK;

}



}