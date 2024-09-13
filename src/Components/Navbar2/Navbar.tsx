import { NavLink } from "react-router-dom";
import appConfig from "../../Utils/AppConfig";
import LanguageSwitcher from "../Main/LanguageSwitcher/LanguageSwitcher";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem/NavbarItem";
import { useTranslation } from "react-i18next";


function NavbarArea(): JSX.Element {
    const { t } = useTranslation();

    return (
        <ul className="Navbar">
            <li className="language-switcher">
                <NavLink to={appConfig.homePage}>{t('Logo')}</NavLink>
            </li>
            <li>
                <ul className="inner-ul">
                    <NavbarItem
                        itemText={t('BOOKS')}
                        itemDestinationPagePath={appConfig.booksPage}
                    />
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
                        itemDestinationPagePath={appConfig.weLovePage}
                    />
                    <NavbarItem
                        itemText={t('SALES')}
                        itemDestinationPagePath={appConfig.salesPage}
                    />
                    <NavbarItem
                        itemText={t('ABOUT')}
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