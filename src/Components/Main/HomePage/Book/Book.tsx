import { NavLink } from "react-router-dom";
import BookModel from "../../../../Models/BookModel";
import "./Book.scss";
import appConfig from "../../../../Utils/AppConfig";

function Book(book: BookModel): JSX.Element {

    return (
        <NavLink to={(`${appConfig.genresPage}/${book.genre}/${book.author}-${book.title}`)} className="Book">
            <img src={require(`../../../../Assets/Images/BookCovers/` + book.coverImage)} />
            <span className="title">{book.series.name ? `${book.series.name} - ` : ''}{book.title}</span>
            <span className="author">by {book.author}</span>
        </NavLink>
    );
}

export default Book;
