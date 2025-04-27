import logger from "../../util/logger";
import { Book } from "../Book.model";


export class BookBuilder {

    private bookTitle!: string;
    private author!: string;
    private genre!: string;
    private format!: string;
    private language!: string;
    private publisher!: string;
    private specialEdition!: string;
    private packaging!: string;
  


    public setBookTitle(bookTitle: string): BookBuilder {
        this.bookTitle = bookTitle;
        return this;
    }

    public setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    public setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    public setFormat(format: string): BookBuilder {
        this.format = format;
        return this;
    }

    public setLanguage(language: string): BookBuilder {
        this.language = language;
        return this;
    }

    public setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    public setSpecialEdition(specialEdition: string): BookBuilder {
        this.specialEdition = specialEdition;
        return this;
    }

    public setPackaging(packaging: string): BookBuilder {
        this.packaging = packaging;
        return this;
    }
    public static newbuilder(): BookBuilder {
        return new BookBuilder();}


    public build(): Book {
        const requiredFields=[
            this.bookTitle,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging
        ];
for (const field of requiredFields) {
    if(!field) {
        logger.error("missing field");
        throw new Error("All fields are required");
    }
}

        return new Book(this.bookTitle,
this.author,
this.genre,
this.format,
this.language,
this.publisher,
this.specialEdition,
this.packaging);
    }

}