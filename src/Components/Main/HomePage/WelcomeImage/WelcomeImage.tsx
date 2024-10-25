import yanImg from '../../../../Assets/Images/yan1.jpg';
import "./WelcomeImage.scss";

function WelcomeImage(): JSX.Element {
    return (
        // <div className="WelcomeImage"
        //     style={{
        //         backgroundImage: `url(${yanImg})`,
        //         backgroundPosition: "bottom center",
        //         backgroundRepeat: "no-repeat"
        //     }}></div>

        <div
            className="WelcomeImage"
            style={{
                backgroundImage: `url(${yanImg})`,
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "brightness(.75) contrast(1.2) blur(0px)",
                position: "relative",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div className="overlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 50, 0.3)",
                }}>

                <h1 className="heading">Yanshuf Books</h1>
                <h2 className="sub-heading">sub-heading</h2>
                {/* <h3>call to action</h3> */}
            </div>
        </div>
    );
}

export default WelcomeImage;
