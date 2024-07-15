import BookModel from "../../../../Models/BookModel";
import "./Book.scss";

function Book(book: BookModel): JSX.Element {
    return (
        <div className="Book">
            <img src={require(`../../../../Assets/Images/` + book.coverImage)} />
            <span className="title">{book.title}</span>
            <span className="author">by {book.author}</span>
        </div>
    );
}

export default Book;
