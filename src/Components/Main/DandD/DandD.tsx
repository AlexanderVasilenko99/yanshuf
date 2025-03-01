import { useTranslation } from "react-i18next";
import "./DandD.scss";

function DandD(): JSX.Element {
const {t} = useTranslation();

    return (
        <div className="DandD">
            <h3>{t('Do you want to learn ho')}</h3>
            <article>hi</article>
            <article>hi</article>
        </div>
    );
}

export default DandD;
