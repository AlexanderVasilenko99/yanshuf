import { NavLink } from "react-router-dom";
// import { NavbarItemModel } from "../../../../Models/NavbarItemModel";
import "./NavbarItem.scss";
import { NavbarItemModel } from "../../../Models/NavbarItemModel";
// import { SubNavItem } from "../../../../Models/SubNavItem";

function NavbarItem(props: NavbarItemModel): JSX.Element {//
    // let arr: SubNavItem[] = props.subNavItems;
    return (
        <li className="NavbarItem">
            <NavLink to={props.itemDestinationPagePath}>
                {props.itemText}
                {props.isDropdown &&
                    <div className="NavbarItemDropdownContent" >
                        {/* {arr?.map(i => <div>
                        <NavLink to={i.subNavItemRedirectPath}>{i.subNavItemHeading}</NavLink>
                    </div>
                    )} */}
                    </div>
                }
            </NavLink >
        </li>
    );
}

export default NavbarItem;