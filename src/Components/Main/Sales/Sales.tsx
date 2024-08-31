import { useTranslation } from 'react-i18next';
import "./Sales.scss";

function Sales(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Sales">
            <span>{t('Sales')}</span>
        </div>
    );
}

export default Sales;
