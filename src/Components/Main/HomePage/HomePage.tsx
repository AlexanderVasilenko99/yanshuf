import BookModel from "../../../Models/BookModel";
import BookLine from "./BookLine/BookLine";
import "./HomePage.scss";
import WelcomeImage from "./WelcomeImage/WelcomeImage";

const bestSellers: BookModel[] = [
    new BookModel("Jack Reacher", "Lee Child", "jack_reacher.jpg"),
    new BookModel("Jack Reacher", "Lee Child", "jack_reacher.jpg"),
    new BookModel("Jack Reacher", "Lee Child", "jack_reacher.jpg"),
    new BookModel("Jack Reacher", "Lee Child", "jack_reacher.jpg"),
    new BookModel("Jack Reacher", "Lee Child", "jack_reacher.jpg")
]

function HomePage(): JSX.Element {
    return (
        <div className="HomePage">
            <WelcomeImage />
            <div className="welcomeText">Ra'ananas most iconic bookstore now with an online presence!</div>
            <h6>PICKS OF THE MONTH</h6>
            <BookLine books={bestSellers} />
            <h6>BESTSELLERS</h6>
            <BookLine books={bestSellers} />
            <h6>NEW IN</h6>
            <BookLine books={bestSellers} />
        </div>
    );
}

export default HomePage;
