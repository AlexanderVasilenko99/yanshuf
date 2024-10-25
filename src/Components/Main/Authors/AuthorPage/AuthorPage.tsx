import { useParams } from "react-router-dom";
import "./AuthorPage.scss";
import { useEffect, useState } from "react";
import BookModel from "../../../../Models/BookModel";
import bookServices from "../../../../Services/BookServices";
import Book from "../../HomePage/Book/Book";

function AuthorPage(): JSX.Element {
    const params = useParams();
    const [books, setBooks] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getBooksByAuthor(params.authorIdentifier)
            .then((books: BookModel[]) => setBooks(books))
            .catch((err: any) => { console.log(err.message) });
    }, []);

    return (
        <div className="AuthorPage">
            <h3>All books by {params.authorIdentifier}:</h3>
            <ul>
                {books?.map((book: BookModel, index: number) => <Book {...book} key={index} />)}
            </ul>
        </div >
    );
}

export default AuthorPage;
