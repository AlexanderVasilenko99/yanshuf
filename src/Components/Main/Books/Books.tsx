import { useEffect, useState } from "react";
import "./Books.scss";
import BookModel from "../../../Models/BookModel";
import bookServices from "../../../Services/BookServices";
import Book from "../HomePage/Book/Book";
import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";

function Books(): JSX.Element {

    const [books, setBooks] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getBooks()
            .then((books: BookModel[]) => setBooks(books))
            .catch((err: any) => { console.log(err.message) });
    }, []);
    return (
        <div className="Books">
            <h3>Welcome to our book haven!</h3>
            <p>Dive into a world of stories and knowledge with a glimpse into our vast catalog, <b>boasting over 35,000 books.</b> From gripping thrillers to heartwarming tales, and from profound non-fiction to enchanting fantasies, our collection has something for every reader. Here are just a few of the gems waiting for you to discover. Happy reading!</p>
            {/* <span>All books</span> */}
            <div className="browse-by">
                <span>Browse by</span>
                <NavLink to={'#'}> all</NavLink>
                <NavLink to={appConfig.genresPage}> genre</NavLink>
                <NavLink to={appConfig.authorsPage}> author</NavLink>
                <NavLink to={appConfig.seriesPage}> series</NavLink>

            </div>
            <ul>
                {books?.map((book: BookModel, index: number) => <Book {...book} key={index} />)}
            </ul>
        </div >
    );
}

export default Books;
