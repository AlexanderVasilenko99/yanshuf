import { useTranslation } from 'react-i18next';
import "./Sales.scss";

function Sales(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Sales">

            <h3>{t(`Ongoing sale on the books outside!`)}</h3>
            <p>{t(`Best Sellers - each book for 20₪`)}
                <br />
                {t(`or`)}
                <br /> 
                {t(`10 books for 100₪`)}
            </p>
            {/* <h3>call to action</h3> */}

        </div>
    );
}

export default Sales;
