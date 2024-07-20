import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BookModel from "../../../../Models/BookModel";
import bookServices from "../../../../Services/BookServices";
import "./BookPage.scss";
import appConfig from "../../../../Utils/AppConfig";

function BookPage(): JSX.Element {
    const params = useParams();
    const [book, setBook] = useState<BookModel>();
    useEffect(() => {
        bookServices.getBookByAuthorAndTitle(params.bookIdentifier)
            .then((b: BookModel) => { setBook(b) })
            .catch((err: any) => { console.log(err.message) });
    }, [])

    return (
        <div className="BookPage">
            {book && <div className="initialInfo">
                <div className="left-col">
                    {<img src={require(`../../../../Assets/Images/BookCovers/` + book.coverImage)} />}
                </div>
                <div className="right-col">
                    <p className="header">
                        <span className="book-title">{book.title} </span>
                        <span className="series">
                            {book.series && `(number ${book.series.orderInSeries} in the `}
                            {book.series &&
                                <NavLink to={`${appConfig.seriesPage}/${book.series.name}`}>
                                    {book.series.name}
                                </NavLink>}
                            {book.series && ` series)`}
                        </span>
                    </p>
                    <p className="author">by
                        {<NavLink
                            to={`${appConfig.authorsPage}/${book.author}`}>
                            &nbsp;{book.author}
                        </NavLink>}
                    </p>
                    <p className="description">{book.description}</p>
                    <p className="language-rating">
                        <span className="language">Language: {book.language}</span>
                        <span className="rating">Rating: {book.rating}</span>

                    </p>
                    <p className="price">Available for just <button>{book.price}&#8362;</button>!</p>
                </div>
            </div>}
        </div >
    );
}

export default BookPage;
