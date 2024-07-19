import { NavLink } from "react-router-dom";
import logo from '../../Assets/Images/logo2.png';
import appConfig from "../../Utils/AppConfig";
import "./Header.scss";
function Header(): JSX.Element {

    return (
        <div className="Header">
            <span><NavLink to={appConfig.homePage}><img src={logo} /></NavLink></span>
            <span>search</span>
            {/* <span>creds</span> */}
        </div>
    );
}

export default Header;
