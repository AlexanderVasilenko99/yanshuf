// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import "./Navbar2.scss";
// import navbarLogo from "../../../Assets/Images/navbar-logo.png";
// import navbarLogo from "../../../Assets/Images"
// import { SubNavItem } from '../../../Models/SubNavItem';
import NavbarItem from "./NavbarItem/NavbarItem";

// const fleetSubNavItems: SubNavItem[] = [
//     new SubNavItem('Small', appConfig.fleetPageSmallPath),
//     new SubNavItem('Medium', appConfig.fleetPageMediumPath),
//     new SubNavItem('Large', appConfig.fleetPageLargePath),
//     new SubNavItem('Suv & Off Road', appConfig.fleetPageSuvOffRoadPath),
//     new SubNavItem('Luxury', appConfig.fleetPageLuxuryPath),
//     new SubNavItem('Motorcycles & Scooters', appConfig.fleetPageMotorcyclesScootersPath),
//     new SubNavItem('Vans & Trucks', appConfig.fleetPageVansTrucksPath),
//     new SubNavItem('All Vehicles', appConfig.fleetPageAllVehiclesPath),
// ];
// const servicesSubNavItems: SubNavItem[] = [
//     new SubNavItem('Vehicle Rental', appConfig.fleetPagePath),
//     new SubNavItem('Monthly Rental', appConfig.servicesMonthlyRentalPagePath),
//     new SubNavItem('Business Rental', appConfig.servicesBusinessRentalPagePath),
//     new SubNavItem('Chauffeur Services', appConfig.servicesChauffeurPagePath),
//     new SubNavItem('Group Car Rental', appConfig.servicesGroupRentalPagePath),
//     new SubNavItem('One Day Car Rental', appConfig.servicesOneDayRentalPagePath),
//     new SubNavItem('One Way Car Rental', appConfig.servicesOneWayRentalPagePath),
//     new SubNavItem('All Services', appConfig.servicesPagePath),
// ];
// const locationsSubNavItems: SubNavItem[] = [
//     new SubNavItem('Israel', appConfig.locationsPagePath),
// ];
// const helpSubNavItems: SubNavItem[] = [
//     new SubNavItem('About Us', appConfig.aboutUsPagePath),
//     new SubNavItem('General Help', appConfig.helpPagePath),
// ];
// const careersSubNavItems: SubNavItem[] = [
//     new SubNavItem('Available Positions', appConfig.careersPagePath)
// ];



function NavbarArea(): JSX.Element {


    return (
        <ul className="Navbar2">
            <li className="language-switcher">
                <NavLink to={appConfig.homePage}>
                    <img src="https://flagsapi.com/GB/shiny/64.png" />
                </NavLink>
            </li>
            <li>
                <ul className="inner-ul">
                    <NavbarItem
                        // isDropdown
                        itemText='SEARCH'
                        itemDestinationPagePath={'#'}
                    // subNavItems={fleetSubNavItems}
                    />
                    <NavbarItem
                        // isDropdown
                        itemText='BOOKS'
                        itemDestinationPagePath={appConfig.booksPage}
                    // subNavItems={fleetSubNavItems}
                    />
                    <NavbarItem
                        // isDropdown
                        itemText='CLASSES'
                        itemDestinationPagePath={appConfig.classesPage}
                    // subNavItems={servicesSubNavItems}
                    />
                    <NavbarItem
                        // isDropdown
                        itemText='THE THINGS WE LOVE'
                        itemDestinationPagePath={appConfig.weLovePage}
                    // subNavItems={locationsSubNavItems}
                    />
                    <NavbarItem
                        isDropdown
                        itemText='GALLERY'
                        itemDestinationPagePath={appConfig.galleryPage}
                    // subNavItems={careersSubNavItems}
                    />
                    <NavbarItem
                        // isDropdown 
                        itemText='AUTHORS'
                        itemDestinationPagePath={appConfig.authorsPage}
                    // subNavItems={helpSubNavItems}
                    />
                    <NavbarItem
                        // isDropdown 
                        itemText='ABOUT'
                        itemDestinationPagePath={appConfig.aboutPage}
                    // subNavItems={helpSubNavItems}
                    />
                </ul>
            </li>
            <li className="language-switcher">
                <NavLink to={appConfig.homePage}>
                    <img src="https://flagsapi.com/GB/shiny/64.png" />
                </NavLink>
            </li>
        </ul>
    );
}

export default NavbarArea;