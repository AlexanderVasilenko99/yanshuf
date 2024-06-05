import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss";
import logo from '../../Assets/Images/logo3.png';
import { useEffect } from 'react';

function Navbar(): JSX.Element {
    useEffect(() => {
        window.addEventListener('scroll', () => toggleNavbarVisibility());
        function toggleNavbarVisibility(): void {
            const navDiv = document.querySelector('#navbar') as HTMLDivElement;
            if (window.scrollY > 20) navDiv.style.top = '0px'; // show navbar
            else if (window.scrollY == 0) navDiv.style.top = '-83px'; // hide navbar
        }
        return window.removeEventListener('scroll', toggleNavbarVisibility);
    }, []);
    return (
        <div className="Navbar" id='navbar'>
            <ul>
                <li><HashLink smooth to="#about">About</HashLink></li>
                <li><HashLink smooth to="#services">Services</HashLink></li>
                <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                <li><HashLink smooth to="/#"><img src={logo} /></HashLink></li>
                <li><HashLink smooth to="#recommendations">Recommendations</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
