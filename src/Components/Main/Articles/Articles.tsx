import Article from "./ArticleList/ArticleItem";
import "./Articles.scss";

function Articles(): JSX.Element {
    return (
        <div className="Articles">
            <h3>Articles by Eli Herstein</h3>
            <ul>
                <Article />
                <Article />
                <Article />
            </ul>
        </div>
    );
}

export default Articles;
