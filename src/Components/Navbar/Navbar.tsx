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
                <li><NavLink to={appConfig.genresPage+"/fiction"}>Fiction</NavLink></li>
                <li><NavLink to={appConfig.homePage}>Teens</NavLink></li>
                <li><NavLink to={appConfig.authorsPage}>Authors</NavLink></li>
                <li><NavLink to={appConfig.homePage}>About</NavLink></li>
                {/* <li><HashLink smooth to="#about">About</HashLink></li>
                <li><HashLink smooth to="#services">Services</HashLink></li>
                <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                <li><HashLink smooth to="#recommendations">Recommendations</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li> */}
            </ul>
        </div>
    );
}

export default Navbar;
