import { BookLineInterface } from "../../../../Interfaces/BookLineInterface";
import BookModel from "../../../../Models/BookModel";
import Book from "../Book/Book";
import "./BookLine.scss";


function BookLine(data: BookLineInterface): JSX.Element {
    const books = data.books;

    return (
        <div className="BookLine">
            {books?.map((b: BookModel, index: number) => <Book {...b} key={index} />)}
        </div>
    );
}

export default BookLine;
