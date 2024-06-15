import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Default Route */}
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                <Route path="/home/" element={<HomePage />} />
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