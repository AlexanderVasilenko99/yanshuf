import { useEffect, useState } from "react";
import "./PicksOTM.scss";
import BookModel from "../../../Models/BookModel";
import bookServices from "../../../Services/BookServices";
import BookLine from "../HomePage/BookLine/BookLine";
import PicksOfTheMonthModel from "../../../Models/PicksOfTheMonthModel";

function PicksOTM(): JSX.Element {

    const [allPicksOTM, setAllPicksOTM] = useState<PicksOfTheMonthModel[]>();
    const [allPicksOTMBooks, setAllPicksOTMBooks] = useState<BookModel[]>([]);

    useEffect(() => {
        bookServices.getAllPicksOfTheMonth()
            .then((picks: PicksOfTheMonthModel[]) => {
                setAllPicksOTM(picks);

                picks.forEach((pick: PicksOfTheMonthModel) =>
                    bookServices.getBooksByIDs(pick.bookIds)
                        .then((books: BookModel[]) => {
                            setAllPicksOTMBooks((allPicksOTMBooks) => [...allPicksOTMBooks, ...books])

                        })
                )
            })
            .catch((err: any) => { console.log(err.message) });
    }, []);

    return (
        <div className="PicksOTM">
            <h3>Picks Of The Month</h3>
            <p>Discover Eli’s Top Picks for This Month: Unveiling the Best Reads to Captivate Your Imagination! Dive into a world of adventure, mystery, and inspiration with our curated selection of must-read books that promise to entertain, enlighten, and engage. Happy reading!</p>
            {allPicksOTM?.map((picks: PicksOfTheMonthModel, index: number) =>
                <div className="month" key={index}>
                    <h5>{new Date(+picks.year, new Date().getMonth() - picks.month + 1).toLocaleString('default', { month: 'long' })} {picks.year}</h5>
                    {allPicksOTMBooks[0] && <BookLine books={allPicksOTMBooks.reverse().splice(0, 5)} />}
                </div>)}
        </div>
    );
}
export default PicksOTM;