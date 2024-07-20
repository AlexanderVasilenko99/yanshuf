import { useEffect, useState } from "react";
import "./Books.scss";
import BookModel from "../../../Models/BookModel";
import bookServices from "../../../Services/BookServices";
import Book from "../HomePage/Book/Book";

function Books(): JSX.Element {

    const [books, setBooks] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getBooks()
            .then((books: BookModel[]) => setBooks(books))
            .catch((err: any) => { console.log(err.message) });
    }, []);
    return (
        <div className="Books">
            <span>All books</span>
            <ul>
                {books?.map((book: BookModel, index: number) => <Book {...book} key={index} />)}
            </ul>
        </div>
    );
}

export default Books;
