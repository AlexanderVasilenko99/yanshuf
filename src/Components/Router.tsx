import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";
import './Routing.scss'
import Books from "./Main/Books/Books";
import About from "./Main/About/About";
import appConfig from "../Utils/AppConfig";
import BookPage from "./Main/Books/BookPage/BookPage";
import Authors from "./Main/Authors/Authors";
import AuthorPage from "./Main/Authors/AuthorPage/AuthorPage";
import Series from "./Main/Series/Series";
import SeriesPage from "./Main/Series/SeriesPage/SeriesPage";

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
                <Route path={appConfig.booksPage + "/:bookIdentifier"} element={<BookPage />} />
                <Route path={appConfig.authorsPage} element={<Authors />} />
                <Route path={appConfig.authorsPage + "/:authorIdentifier"} element={<AuthorPage />} />
                <Route path={appConfig.seriesPage} element={<Series />} />
                <Route path={appConfig.seriesPage + "/:seriesIdentifier"} element={<SeriesPage />} />
                <Route path={appConfig.aboutPage} element={<About />} />
                {/* <Route path="/vacations/" element={<VacationsList />} />
                <Route path="/vacations/new" element={<AddVacation />} />
                <Route path="/vacations/:uuid" element={<VacationPage />} />
                <Route path="/register/" element={<RegisterComponent />} />
                <Route path="/reports/" element={<ReportsArea />} />
                <Route path="/users/:uuid" element={<UserArea />} />
                <Route path="/about/" element={<AboutArea />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/*" element={<PageNotFound />}></Route> */}
            </Routes>
        </div>
    );
}

export default Routing;