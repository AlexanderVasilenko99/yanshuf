import { useEffect } from "react";
import "./Books.scss";
import bookServices from "../../../Services/BookServices";

function Books(): JSX.Element {
    useEffect(()=>{
        bookServices.getBooksBySeries("Jack Reacher");
    },[]);

    return (
        <div className="Books">
            <span>Books</span>
        </div>
    );
}

export default Books;
