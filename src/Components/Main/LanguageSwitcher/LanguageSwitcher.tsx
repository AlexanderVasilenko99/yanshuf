import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher(): JSX.Element {
    const { i18n } = useTranslation();
    const [isLanguageEnglish, setIsLanguageEnglish] = useState<boolean>(true);

    return (
        <img src={isLanguageEnglish?'https://flagsapi.com/GB/shiny/64.png':'https://flagsapi.com/IL/shiny/64.png'} className="LanguageSwitcher" onClick={() => {
            i18n.changeLanguage(isLanguageEnglish ? 'he' : 'en');
            setIsLanguageEnglish(!isLanguageEnglish);
        }} >
        </ img>
    );
}

export default LanguageSwitcher;
