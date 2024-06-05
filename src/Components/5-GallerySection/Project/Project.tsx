import { NavLink } from "react-router-dom";
import { ProjectModel } from "../../../Models/ProjectModel";
import "./Project.scss";

function Project(props: ProjectModel): JSX.Element {
    return (
        <NavLink to={props.redirect} className="Project" target="_blank">
            <img src={require(`../../../Assets/Images/${props.image_name}`)} />
            <div className="date-cliend">{props.client_name} {props.due_date && <>-</>} {props.due_date}</div>
            <p>
                <span>`{props.project_name}`</span>{/* - {props.workType} */}
            </p>
        </NavLink>
    );
}

export default Project;
