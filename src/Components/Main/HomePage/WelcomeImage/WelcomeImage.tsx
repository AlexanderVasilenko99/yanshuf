import "./WelcomeImage.scss";
import welcomeImage from '../../../../Assets/Images/picks082024.png'
import { NavLink } from "react-router-dom";
import appConfig from "../../../../Utils/AppConfig";

function WelcomeImage(): JSX.Element {
    return (
        <NavLink to={appConfig.picksOfTheMonthPage} className="WelcomeImage">
            <img src={welcomeImage}/>
        </NavLink>
    );
}

export default WelcomeImage;
