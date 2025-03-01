import { useTranslation } from 'react-i18next';
import "./Sales.scss";
import Sale from './Sale/Sale';

function Sales(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="Sales">
            <h3>Ongoing Sales</h3>
            <div className='sales-content'>
                <div className="sale-container">
                    <Sale content="Best Sellers - each book for 20₪" />
                </div>
                <div className="sale-container">
                    <h3 className='spacer'>or</h3>
                </div>
                <div className="sale-container">
                    <Sale content="10 books for 100₪" />
                </div>
            </div>
        </div>
    );
}

export default Sales;
