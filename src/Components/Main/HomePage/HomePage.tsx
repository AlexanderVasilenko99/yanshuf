import BookModel from "../../../Models/BookModel";
import BookLine from "./BookLine/BookLine";
import "./HomePage.scss";
import WelcomeImage from "./WelcomeImage/WelcomeImage";

const bestSellers: BookModel[] = [
    new BookModel("book1", "author1", "imagename1"),
    new BookModel("book2", "author2", "imagename2"),
    new BookModel("book3", "author3", "imagename3")
]

function HomePage(): JSX.Element {    
    return (
        <div className="HomePage">
            <WelcomeImage />
            <div className="welcomeText">Ra'ananas most iconic bookstore now with an online presence!</div>
            <BookLine books={bestSellers}/>
        </div>
    );
}

export default HomePage;
