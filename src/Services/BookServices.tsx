import axios from "axios";
import BookModel from "../Models/BookModel";
import appConfig from "../Utils/AppConfig";

class BookServices {
    public async getBooks(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getPicksOfTheMonth(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.picksOfTheMonthFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getBestsellers(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getNewIn(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        let books: BookModel[] = response.data;
        books = books.splice(books.length - 5, 5);
        return books;
    }
    public async getBookByAuthorAndTitle(search: string): Promise<BookModel> {
        search = search
            .replace(/([a-z])([A-Z])/g, '$1 $2')          // Insert space between lowercase and uppercase letters
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')     // Handle consecutive capital letters followed by lowercase
            .replace(/(\b[A-Z]\.)\s*/g, '$1 ')            // Add space after initials (e.g., "J.D." -> "J. D.")
            .replace(/-/g, ' ')                           // Replace dashes with spaces
            .replace(/\s+/g, ' ')                         // Replace multiple spaces with a single space
            .trim();                           // Trim leading and trailing spaces

        const books = await this.getBooks();
        const normalizedSearch = search.toLowerCase();
        const book = books.find((b: BookModel) =>
            normalizedSearch.includes(b.author.toLowerCase()) &&
            normalizedSearch.includes(b.title.toLowerCase())
        );
        return book;
    }
    public async getBooksBySeries(series: string): Promise<BookModel[]> {
        const books: BookModel[] = await this.getBooks();
        const filteredBooks = books.filter(b => b.series.name === series);
        return filteredBooks;
    }
    public async getBooksByAuthor(author: string): Promise<BookModel[]> {
        const books: BookModel[] = await this.getBooks();
        const filteredBooks = books.filter(b => b.author === author);
        return filteredBooks;
    }
    public async getBooksByGenre(genre: string): Promise<BookModel[]> {
        const books: BookModel[] = await this.getBooks();
        const filteredBooks = books.filter(b => b.genre.toLowerCase() === genre.toLowerCase());
        return filteredBooks;
    }
}
const bookServices = new BookServices();
export default bookServices;