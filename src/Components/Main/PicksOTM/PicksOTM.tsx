import { useEffect, useState } from "react";
import "./PicksOTM.scss";
import BookModel from "../../../Models/BookModel";
import bookServices from "../../../Services/BookServices";

function PicksOTM(): JSX.Element {

    const [picksOTM, setPicksOTM] = useState<BookModel[]>();
    useEffect(() => {
        bookServices.getAllPicksOfTheMonth()
            .then((picks: BookModel[]) => setPicksOTM(picks))
            .catch((err: any) => { console.log(err.message) });
    }, []);

    return (
        <div className="PicksOTM">
            <span>Picks Of The Month</span>
        </div>
    );
}

export default PicksOTM;
