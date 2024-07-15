import { useParams } from "react-router-dom";
import "./BookPage.scss";

function BookPage(): JSX.Element {
    const params = useParams();
    

    return (
        <div className="BookPage">
            <span>BookPage {params.bookId}</span>
        </div>
    );
}

export default BookPage;
