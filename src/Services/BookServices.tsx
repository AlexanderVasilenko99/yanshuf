import axios from "axios";
import BookModel from "../Models/BookModel";
import appConfig from "../Utils/AppConfig";

class BookServices {
    public async getBooks(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getBestsellers(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getPicksOfTheMonth(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
    public async getNewIn(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.booksFetchURL);
        const books: BookModel[] = response.data;
        return books;
    }
}
const bookServices = new BookServices();
export default bookServices;