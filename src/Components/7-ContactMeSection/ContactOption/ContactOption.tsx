import { NavLink } from "react-router-dom";
import ContactOptionModel from "../../../Models/ContactOptionModel";
import "./ContactOption.scss";

function ContactOption(props: ContactOptionModel): JSX.Element {
    return (
        <NavLink to={props.redirect} className="ContactOption" target="_blank">
            <div className="image-container">
                <img src={require(`../../../Assets/Images/${props.image_name}`)} alt="image_broken" />
            </div>
            <div className="header-content-container">
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </NavLink>
    );
}

export default ContactOption;
