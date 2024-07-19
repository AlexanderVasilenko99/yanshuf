import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookModel from "../../../../Models/BookModel";
import bookServices from "../../../../Services/BookServices";
import "./BookPage.scss";

function BookPage(): JSX.Element {
    const params = useParams();
    const [book, setBook] = useState<BookModel>();
    useEffect(() => {
        bookServices.getBookByAuthorAndTitle(params.bookIdentifier)
            .then((b: BookModel) => {
                setBook(b);
            })
            .catch((err: any) => { console.log(err.message) });
    }, [])

    return (
        <div className="BookPage">
            <div className="initialInfo">
                <div>
                    {book && <img src={require(`../../../../Assets/Images/BookCovers/` + book.coverImage)} />}
                </div>
                <div>{params.bookIdentifier}</div>
            </div>
        </div>
    );
}

export default BookPage;
