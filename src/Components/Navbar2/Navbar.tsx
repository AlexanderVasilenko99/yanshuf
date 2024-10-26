import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import LanguageSwitcher from "../Main/LanguageSwitcher/LanguageSwitcher";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem/NavbarItem";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'


function NavbarArea(): JSX.Element {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <ul className="Navbar">
            <li className="logo-container mobile">
                <NavLink to={appConfig.homePage}>{t('Logo')}</NavLink>
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="mobile trigger">
            <Hamburger toggled={isOpen} />
            </li>
            <li className={isOpen ? "open" : ""}>
                <ul className={`inner-ul`}>
                    {/* <NavbarItem
                        itemText={t('BOOKS')}
                        itemDestinationPagePath={appConfig.booksPage}
                    /> */}
                    <NavbarItem
                        itemText={t('D&D')}
                        itemDestinationPagePath={appConfig.dAndDPage}
                    />
                    <NavbarItem
                        itemText={t('GALLERY')}
                        itemDestinationPagePath={appConfig.galleryPage}
                    />
                    <NavbarItem
                        itemText={t('ARTICLES')}
                        itemDestinationPagePath={appConfig.articlesPage}
                    />
                    <NavbarItem
                        itemText={t('SALES')}
                        itemDestinationPagePath={appConfig.salesPage}
                    />
                    <NavbarItem
                        itemText={t('ABOUT')}
                        itemDestinationPagePath={appConfig.aboutPage}
                    />
                    <a className="mobile-switcher">
                        <LanguageSwitcher />
                    </a>
                </ul>
            </li>
            <li className="language-switcher desktop">
                <LanguageSwitcher />
            </li>
        </ul>
    );
}

export default NavbarArea;