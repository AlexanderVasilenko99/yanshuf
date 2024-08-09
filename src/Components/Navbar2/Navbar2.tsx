// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import "./Navbar2.scss";
// import navbarLogo from "../../../Assets/Images/navbar-logo.png";
// import navbarLogo from "../../../Assets/Images"
// import { SubNavItem } from '../../../Models/SubNavItem';
import NavbarItem from "./NavbarItem/NavbarItem";
import { useState } from "react";

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
    const [isLanguageEnglish, setIsLanguageEnglish] = useState<boolean>(true);

    return (
        <ul className="Navbar2">
            <li className="language-switcher" onClick={() => setIsLanguageEnglish(!isLanguageEnglish)}>
                <NavLink to={appConfig.homePage}>
                    {isLanguageEnglish ? <img src="https://flagsapi.com/GB/shiny/64.png" /> : <img src="https://flagsapi.com/IL/shiny/64.png" />}
                </NavLink>
            </li>
            <li>
                <ul className="inner-ul">
                    <NavbarItem
                        itemText='SEARCH'
                        itemDestinationPagePath={'#'}
                    />
                    <NavbarItem
                        itemText='BOOKS'
                        itemDestinationPagePath={appConfig.booksPage}
                    />
                    <NavbarItem
                        itemText='D&D'
                        itemDestinationPagePath={appConfig.classesPage}
                    />
                    <NavbarItem
                        itemText='THE THINGS WE LOVE'
                        itemDestinationPagePath={appConfig.weLovePage}
                    />
                    <NavbarItem
                        isDropdown
                        itemText='GALLERY'
                        itemDestinationPagePath={appConfig.galleryPage}
                    />
                    <NavbarItem
                        itemText='ABOUT'
                        itemDestinationPagePath={appConfig.aboutPage}
                    />
                </ul>
            </li>
            <li className="language-switcher">
                <NavLink to={appConfig.homePage}>
                    {isLanguageEnglish ? <img src="https://flagsapi.com/GB/shiny/64.png" /> : <img src="https://flagsapi.com/IL/shiny/64.png" />}
                </NavLink>
            </li>
        </ul>
    );
}

export default NavbarArea;