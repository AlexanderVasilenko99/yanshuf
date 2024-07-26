// import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import appConfig from '../../Utils/AppConfig';
import "./Navbar.scss";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar" id='navbar'>
            <ul>
                <li><NavLink to={appConfig.homePage}>Browse</NavLink></li>
                <li><NavLink to={appConfig.booksPage}>Books</NavLink></li>
                <li><NavLink to={appConfig.classesPage}>Classes</NavLink></li>
                <li><NavLink to={appConfig.weLovePage}>The Things We Love</NavLink></li>
                <li><NavLink to={appConfig.galleryPage}>Gallery</NavLink></li>
                <li><NavLink to={appConfig.authorsPage}>Authors</NavLink></li>
                <li><NavLink to={appConfig.aboutPage}>About</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
