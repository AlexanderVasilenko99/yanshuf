import "./WelcomeImage.scss";
import welcomeImage from '../../../../Assets/Images/picks.png'

function WelcomeImage(): JSX.Element {
    return (
        <div className="WelcomeImage">
            <img src={welcomeImage}/>
        </div>
    );
}

export default WelcomeImage;
