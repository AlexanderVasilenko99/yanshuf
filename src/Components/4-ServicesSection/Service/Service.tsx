import { HashLink } from "react-router-hash-link";
import ServiceOptionModel from "../../../Models/ServiceOptionModel";
import "./Service.scss";

function Service(props: ServiceOptionModel): JSX.Element {
    return (
        <div className="Service">
            <img src={require(`../../../Assets/Images/${props.image_name}`)} className="service-image" />
            <h3>{props.header}</h3>
            <hr />
            <p>{props.content}</p>
            <HashLink smooth className="service-icon-container" to='#contact'>
                <img src={require(`../../../Assets/Images/${props.icon_image_name}`)} className="service-icon" />
                <p>Lets talk about {props.header.toLowerCase()}!</p>
            </HashLink>
        </div>
    );
}

export default Service;
