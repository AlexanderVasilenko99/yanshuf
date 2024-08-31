import appConfig from "../../Utils/AppConfig";
import LanguageSwitcher from "../LanguageSwitcher";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem/NavbarItem";


function NavbarArea(): JSX.Element {

    return (
        <ul className="Navbar">
            <li className="language-switcher">
                Logo
            </li>
            <li>
                <ul className="inner-ul">
                    <NavbarItem
                        itemText='BOOKS'
                        itemDestinationPagePath={appConfig.booksPage}
                    />
                    <NavbarItem
                        itemText='D&D'
                        itemDestinationPagePath={appConfig.dAndDPage}
                    />
                    <NavbarItem
                        itemText='GALLERY'
                        itemDestinationPagePath={appConfig.galleryPage}
                    />
                    <NavbarItem
                        itemText='THE THINGS WE LOVE'
                        itemDestinationPagePath={appConfig.weLovePage}
                    />
                    <NavbarItem
                        itemText='SALES'
                        itemDestinationPagePath={appConfig.salesPage}
                    />
                    <NavbarItem
                        itemText='ABOUT'
                        itemDestinationPagePath={appConfig.aboutPage}
                    />
                </ul>
            </li>
            <li className="language-switcher">
                <LanguageSwitcher />
            </li>
        </ul>
    );
}

export default NavbarArea;