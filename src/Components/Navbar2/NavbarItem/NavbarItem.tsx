import { NavLink } from "react-router-dom";
import { NavbarItemModel } from "../../../Models/NavbarItemModel";
import "./NavbarItem.scss";

function NavbarItem(props: NavbarItemModel): JSX.Element {//
    return (
        // <li className="NavbarItem">
            <NavLink to={props.itemDestinationPagePath} className="NavbarItem">
                {props.itemText}
            </NavLink >
        // </li>
    );
}

export default NavbarItem;