import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../Utils/AppConfig";
import About from "./Main/About/About";
import AuthorPage from "./Main/Authors/AuthorPage/AuthorPage";
import Authors from "./Main/Authors/Authors";
import BookPage from "./Main/Books/BookPage/BookPage";
import Books from "./Main/Books/Books";
import GenrePage from "./Main/Genres/GenrePage/GenrePage";
import Genres from "./Main/Genres/Genres";
import HomePage from "./Main/HomePage/HomePage";
import Series from "./Main/Series/Series";
import SeriesPage from "./Main/Series/SeriesPage/SeriesPage";
import './Routing.scss';
import PicksOTM from "./Main/PicksOTM/PicksOTM";
import Articles from "./Main/Articles/Articles";
import Gallery from "./Main/Gallery/Gallery";
import DandD from "./Main/DandD/DandD";
import Sales from "./Main/Sales/Sales";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Default Route */}
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                {/* <Route path="/yanshuf" element={<Navigate to={"/home"} />}></Route> */}
                {/* <Route path="/yanshuf/home" element={<Navigate to={"/home"} />}></Route> */}
                <Route path={appConfig.homePage} element={<HomePage />} />
                <Route path={appConfig.booksPage} element={<Books />} />
                <Route path={appConfig.genresPage + "/:genreIdentifier/:bookIdentifier"} element={<BookPage />} />
                <Route path={appConfig.authorsPage} element={<Authors />} />
                <Route path={appConfig.authorsPage + "/:authorIdentifier"} element={<AuthorPage />} />
                <Route path={appConfig.seriesPage} element={<Series />} />
                <Route path={appConfig.seriesPage + "/:seriesIdentifier"} element={<SeriesPage />} />
                <Route path={appConfig.genresPage} element={<Genres />} />
                <Route path={appConfig.genresPage + "/:genreIdentifier"} element={<GenrePage />} />
                <Route path={appConfig.aboutPage} element={<About />} />
                <Route path={appConfig.salesPage} element={<Sales />} />
                <Route path={appConfig.picksOfTheMonthPage} element={<PicksOTM />} />
                <Route path={appConfig.dAndDPage} element={<DandD/>} />
                <Route path={appConfig.articlesPage} element={<Articles />} />
                <Route path={appConfig.galleryPage} element={<Gallery />} />
                {/* <Route path="/*" element={<PageNotFound />}></Route> */}
            </Routes>
        </div>
    );
}

export default Routing;