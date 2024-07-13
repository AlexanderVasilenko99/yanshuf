import "./Header.scss";
import logo from '../../Assets/Images/logo.png'
function Header(): JSX.Element {

    return (
        <div className="Header">
            <span><img src={logo} /></span>
            <span>search</span>
            <span>creds</span>
        </div>
    );
}

export default Header;
