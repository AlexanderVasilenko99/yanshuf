import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ArticleModel from "../../../../Models/ArticleModel";
// import bookServices from "../../../../Services/BookServices";
import "./ArticleItem.scss";
import appConfig from "../../../../Utils/AppConfig";

function ArticleItem(): JSX.Element {
    // const params = useParams();

    const [article, setArticle] = useState<ArticleModel>(new ArticleModel(1, "פיקניק בשולי הדרך", new Date(13, 1, 2002), "RoadsidePicnic.jpg", "ספרם המתורגם הראשון של האחים סטרוגטצקי עוסק במפגש עם החוצנים באופן אחר מכל שידענו עד כה", "אשכרה התוכן של המאמר"));
    // useEffect(() => {
    //     bookServices.getBookByAuthorAndTitle(params.bookIdentifier)
    //         .then((b: BookModel) => { setBook(b) })
    //         .catch((err: any) => { console.log(err.message) });
    // }, [])

    return (
        <li className="ArticleItem">
            {/* {article && */}
            <div className="initialInfo">
                {/* <div className="left-col">
                </div> */}
                <div className="left-col">
                    <div className="image-container">
                        {<img src={require(`../../../../Assets/Images/ArticleCovers/` + article.coverImage)} />}
                    </div>
                </div>
                <div className="right-col">
                    <NavLink to={'#'} className="header">
                        <span className="article-title">{article.title}</span>
                    </NavLink>
                    <p className="author">By Eli Herstein</p><hr />
                    <p className="description">{article.short}</p>
                    <NavLink to={'#'} className="read-more">הסיפור המלא</NavLink>
                </div>
            </div>
            {/* } */}
        </li >
    );
}

export default ArticleItem;
