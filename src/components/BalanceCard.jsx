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
        <section>
            <h2>Saldo Total</h2>
            <p>
                R${' '}
                <span>
                    {totalBalance
                        ? convertValueToBRLString(totalBalance)
                        : '0.00'}
                </span>
            </p>
        </section>
    );
}

export default BalanceCard;
