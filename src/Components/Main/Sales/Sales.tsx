import { useTranslation } from 'react-i18next';
import "./Sales.scss";

function Sales(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Sales">
            <h3>{t('Sales')}</h3>
        </div>
    );
}

export default Sales;
