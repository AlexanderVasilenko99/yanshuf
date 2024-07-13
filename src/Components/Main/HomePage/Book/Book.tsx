import BookModel from "../../../../Models/BookModel";
import "./Book.scss";

function Book(book:BookModel): JSX.Element {
    return (
        <div className="Book">
            {book.name}
        </div>
    );
}

export default Book;
