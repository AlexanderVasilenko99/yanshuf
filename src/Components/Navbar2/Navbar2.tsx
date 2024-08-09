import { useState } from "react";
import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import "./Navbar2.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

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
                        itemDestinationPagePath={appConfig.dAndDPage}
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