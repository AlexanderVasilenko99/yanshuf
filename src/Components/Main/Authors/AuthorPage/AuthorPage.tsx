import { useParams } from "react-router-dom";
import "./AuthorPage.scss";

function AuthorPage(): JSX.Element {
    const params = useParams();

    return (
        <div className="AuthorPage">{params.authorIdentifier}</div >
    );
}

export default AuthorPage;
