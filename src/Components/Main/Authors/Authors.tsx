import { useEffect, useState } from "react";
import "./Authors.scss";
import bookServices from "../../../Services/BookServices";

function Authors(): JSX.Element {
    const [authors,setAuthors] = useState<string>();
    useEffect(() => {
        bookServices.getAuthors()
            .then(a => console.log(a))
            .catch((err: any) => { console.log(err.message) });
    }, []);
    return (
        <div className="Authors">
            <span>Authors</span>
        </div>
    );
}

export default Authors;
