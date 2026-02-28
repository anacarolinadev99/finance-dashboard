import React from 'react';
import { convertValueToBRLString } from '../utils/financeUtils';

function BalanceCard({ transactionList }) {
    //Calcula o total
    const totalBalance = transactionList?.reduce((acc, transaction) => {
        if (transaction.type === 'income') return acc + transaction.value;
        if (transaction.type === 'expense') return acc - transaction.value;
        return acc;
    }, 0);

    return (
        <section className="totalBalance container">
            <h2>Saldo Total</h2>
            <p>
                R${' '}
                <span
                    className={
                        totalBalance >= 0
                            ? totalBalance === 0
                                ? ''
                                : 'positive'
                            : 'negative'
                    }
                >
                    {totalBalance
                        ? convertValueToBRLString(totalBalance)
                        : '0.00'}
                </span>
            </p>
        </section>
    );
}

export default BalanceCard;
