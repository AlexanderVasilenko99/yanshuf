import BookModel from "../../../Models/BookModel";
import BookLine from "./BookLine/BookLine";
import "./HomePage.scss";
import WelcomeImage from "./WelcomeImage/WelcomeImage";

const bestSellers: BookModel[] = [
    new BookModel("Jack Reacher - Killing Floor", "Lee Child", "JackReacher-KillingFloor.jpg"),
    new BookModel("Jack Reacher - Die Trying", "Lee Child", "JackReacher-DieTrying.jpg"),
    new BookModel("Jack Reacher - Tripwire", "Lee Child", "JackReacher-Tripwire.jpg"),
    new BookModel("Jack Reacher - Running Blind", "Lee Child", "JackReacher-RunningBlind.jpg"),
    new BookModel("Jack Reacher - Echo Burning", "Lee Child", "JackReacher-EchoBurning.jpg")
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
