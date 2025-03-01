import { useTranslation } from 'react-i18next';
import "./Sale.scss";
import { useState } from 'react';

interface SaleProps {
    content: string;
}

function Sale({ content }: SaleProps): JSX.Element {
    const { t } = useTranslation();
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    return (
        // <div className="Sale">
        //     {/* {t(`Ongoing sale on the books outside!`)} */}
        //     <span>{content}</span>
        // </div>


        <div className="artboard"
            onMouseOver={() => { setIsFlipped(true); }}
            onMouseLeave={() => { setIsFlipped(true); }}>
            <div className="card">

                <div className={'card__side card__side--back'}>
                    <div className="card__cover">
                        <h4 className="card__heading">
                            <span className="card__heading-span">{content}</span>
                        </h4>
                    </div>
                    <div className="card__details">
                        <span>{content}</span>
                    </div>
                </div>

                <div className="card__side card__side--front">
                    <div className="card__theme">
                        <div className="card__theme-box">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sale;
