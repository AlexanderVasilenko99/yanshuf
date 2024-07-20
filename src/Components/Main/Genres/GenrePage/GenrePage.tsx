import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookModel from "../../../../Models/BookModel";
import bookServices from "../../../../Services/BookServices";
import Book from "../../HomePage/Book/Book";
import "./GenrePage.scss";

function GenrePage(): JSX.Element {
    const params = useParams();
    const [books, setBooks] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getBooksByGenre(params.genreIdentifier)
            .then((books: BookModel[]) => setBooks(books))
            .catch((err: any) => { console.log(err.message) });
    }, []);

    return (
        <div className="GenrePage">All {params.genreIdentifier} books:
            <ul>
                {books?.map((book: BookModel, index: number) => <Book {...book} key={index} />)}
            </ul>
        </div >
    );
}

export default GenrePage;
