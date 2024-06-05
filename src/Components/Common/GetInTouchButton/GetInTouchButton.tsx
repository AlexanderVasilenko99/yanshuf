import { HashLink } from "react-router-hash-link";
import "./GetInTouchButton.scss";

function GetInTouchButton(): JSX.Element {
    return (
        <HashLink smooth to='#contact' className="GetInTouchButton">Get in touch!</HashLink>
    );
}

export default GetInTouchButton;
