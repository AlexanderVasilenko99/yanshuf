import { useParams } from "react-router-dom";
import "./BookPage.scss";
import { useEffect } from "react";
import bookServices from "../../../../Services/BookServices";
import BookModel from "../../../../Models/BookModel";

function BookPage(): JSX.Element {
    const params = useParams();

    useEffect(() => {
        bookServices.getBookByAuthorAndTitle(params.bookIdentifier)
            .then((book: BookModel) => {console.log(book)})
            .catch((err: any) => { console.log(err.message) })
    }, [])

    return (
        <div className="BookPage">
            <div className="initialInfo">
                <div>
                    {/* <img src={} /> */}
                </div>
                <div>{params.bookIdentifier}</div>
            </div>
        </div>
    );
}

export default BookPage;
