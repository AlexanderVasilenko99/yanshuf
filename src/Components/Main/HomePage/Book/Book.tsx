import BookModel from "../../../../Models/BookModel";
import "./Book.scss";

function Book(book: BookModel): JSX.Element {
    return (
        <div className="Book">
            <img src={require(`../../../../Assets/Images/` + book.image_name)} />
            <span className="title">{book.name}</span>
            <span className="author">by {book.author}</span>
        </div>
    );
}

export default Book;
