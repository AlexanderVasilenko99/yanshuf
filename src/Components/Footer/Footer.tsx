import { useTranslation } from "react-i18next";
import "./Footer.scss";

function Footer(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Footer">
            <p>{t('©Yanshuf books ltd. All rights reserved. Made possible by Alexander Vasilenko.')}</p>
        </div>
    );
}

export default Footer;
