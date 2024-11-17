import { useEffect, useState } from "react";
import BookModel from "../../../Models/BookModel";
import bookServices from "../../../Services/BookServices";
import BookLine from "./BookLine/BookLine";
import "./HomePage.scss";
import WelcomeImage from "./WelcomeImage/WelcomeImage";
import img  from '../../../Assets/Images/test2.jpg'

function HomePage(): JSX.Element {
    const dateForPicksOfTheMonth = new Date();
    const [bestsellers, setBestsellers] = useState<BookModel[]>();
    const [newIn, setNewIn] = useState<BookModel[]>();
    const [picksOfTheMonth, setPicksOfTheMonth] = useState<BookModel[]>();

    // useEffect(() => {
    //     bookServices.getPicksOfTheMonthByYearAndMonth(dateForPicksOfTheMonth.getFullYear(), dateForPicksOfTheMonth.getMonth() + 1)
    //         .then((books: BookModel[]) => { setPicksOfTheMonth(books) })
    //         .catch((err: any) => console.log(err.message));
    //     bookServices.getBestsellers()
    //         .then((books: BookModel[]) => { setBestsellers(books) })
    //         .catch((err: any) => console.log(err.message));
    //     bookServices.getNewIn()
    //         .then((books: BookModel[]) => { setNewIn(books) })
    //         .catch((err: any) => console.log(err.message));
    // }, []);

    return (
        <div className="HomePage">
            <WelcomeImage />
            {/* <div className="welcomeText">Ra'ananas most iconic bookstore now with an online presence!</div>
            <h6>PICKS OF THE MONTH</h6>
            {picksOfTheMonth && <BookLine books={picksOfTheMonth} />}
            <h6>BESTSELLERS</h6>
            {bestsellers && <BookLine books={bestsellers.slice(0, 5)} />}
            <h6>NEW IN</h6>
            {newIn && <BookLine books={newIn.slice(0, 5)} />} */}
            {/* <img className="img" src={img} /> */}
        </div>
    );
}

export default HomePage;
