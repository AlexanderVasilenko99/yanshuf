import { useParams } from "react-router-dom";
import "./SeriesPage.scss";
import { useEffect, useState } from "react";
import BookModel from "../../../../Models/BookModel";
import bookServices from "../../../../Services/BookServices";
import Book from "../../HomePage/Book/Book";

function SeriesPage(): JSX.Element {
    const params = useParams();
    const [books, setBooks] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getBooksBySeries(params.seriesIdentifier)
            .then((books: BookModel[]) => setBooks(books))
            .catch((err: any) => { console.log(err.message) });
    }, []);

    return (
        <div className="SeriesPage">
            <h3>All books from the {params.seriesIdentifier} series:</h3>
            <ul>
                {books?.map((book: BookModel, index: number) => <Book {...book} key={index} />)}
            </ul>
        </div >
    );
}

export default SeriesPage;
