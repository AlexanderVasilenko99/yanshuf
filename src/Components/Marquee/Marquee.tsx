import { useTranslation } from "react-i18next";
import "./Marquee.scss";
import MarqueeComponent from "react-fast-marquee";
function Marquee(): JSX.Element {
    const { t } = useTranslation();
    return (
        <MarqueeComponent className="Marquee">
            <div className="marquee-text">{t("Ra'ananas most iconic bookstore now with an online presence!")}</div>
            <div className="marquee-text">{t("New in: Eli's picks of the month for August 2024!")}</div>
        </MarqueeComponent >
    );
}

export default Marquee;
