import "./Sales.scss";
import translationEN from '../../../Languages/EN/translation.json';
import translationHE from '../../../Languages/HE/translation.json';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const resources = {
    en: {
        translation: translationEN
    },
    he: {
        translation: translationHE
    }
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });


function Sales(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Sales">
            <span>Sales</span>

            <h4>{t('welcome')}</h4>
            <h4>{t('contactUs')}</h4>
        </div>
    );
}

export default Sales;
