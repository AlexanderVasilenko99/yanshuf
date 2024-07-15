import { useParams } from "react-router-dom";
import "./BookPage.scss";

function BookPage(): JSX.Element {
    const params = useParams();


    return (
        <div className="BookPage">
            <div className="initialInfo">
                <div>
                {params.bookIdentifier}
                </div>
                <div>yo</div>
            </div>
        </div>
    );
}

export default BookPage;
