import "./Marquee.scss";
import MarqueeComponent from "react-fast-marquee";
function Marquee(): JSX.Element {
    return (
        <MarqueeComponent className="Marquee">
            <div className="marquee-text">Ra'ananas most iconic bookstore now with an online presence!</div>
            <div className="marquee-text">New in: Eli's picks of the month for August 2024!</div>
        </MarqueeComponent >
    );
}

export default Marquee;
