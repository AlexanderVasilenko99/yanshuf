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
        const books: BookModel[] = response.data;
        return books;
    }
    public async getBookByAuthorAndTitle(search: string): Promise<BookModel> {
        search = search.replace(/([A-Z])/g, ' $1').replace(/-/g, ' ').replace(/^ /, '').replace('  ', ' ');
        const books = await this.getBooks();
        const book = books.find((b: BookModel) => search.includes(b.author) && search.includes(b.title));
        return book;
    }
    public async getBooksBySeries(series: string): Promise<BookModel[]> {
        const books: BookModel[] = await this.getBooks();
        const filteredBooks = books.filter(b => b.series.name === series);
        return filteredBooks;
    }
    public async getBooksByAuthor(author: string): Promise<BookModel[]> {
        console.log(author);
        
        const books: BookModel[] = await this.getBooks();
        const filteredBooks = books.filter(b => b.author === author);
        return filteredBooks;
    }
}
const bookServices = new BookServices();
export default bookServices;