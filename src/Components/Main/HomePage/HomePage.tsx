import { useEffect, useState } from "react";
import BookModel from "../../../Models/BookModel";
import BookLine from "./BookLine/BookLine";
import "./HomePage.scss";
import WelcomeImage from "./WelcomeImage/WelcomeImage";
import bookServices from "../../../Services/BookServices";


function HomePage(): JSX.Element {

    const [bestsellers, setBestsellers] = useState<BookModel[]>();
    const [newIn, setNewIn] = useState<BookModel[]>();
    const [picksOfTheMonth, setPicksOfTheMonth] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getPicksOfTheMonth()
            .then((books: BookModel[]) => { setPicksOfTheMonth(books) })
            .catch((err: any) => console.log(err.message));
        bookServices.getBestsellers()
            .then((books: BookModel[]) => { setBestsellers(books) })
            .catch((err: any) => console.log(err.message));
        bookServices.getNewIn()
            .then((books: BookModel[]) => { setNewIn(books) })
            .catch((err: any) => console.log(err.message));
    }, []);

    return (
        <div className="HomePage">
            <WelcomeImage />
            <div className="welcomeText">Ra'ananas most iconic bookstore now with an online presence!</div>
            <h6>PICKS OF THE MONTH</h6>
            <BookLine books={picksOfTheMonth} />
            <h6>BESTSELLERS</h6>
            <BookLine books={bestsellers} />
            <h6>NEW IN</h6>
            <BookLine books={newIn} />
        </div>
    );
}

export default HomePage;
