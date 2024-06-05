import { HashLink } from "react-router-hash-link";
import "./ServicesButton.scss";

function ServicesButton(): JSX.Element {
    return (
        <HashLink smooth to='#services' className="ServicesButton">Services</HashLink>
    );
}

export default ServicesButton;
