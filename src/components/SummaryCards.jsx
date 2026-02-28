import React from 'react';
import { convertValueToBRLString } from '../utils/financeUtils';
import Chart from './Chart';

function SummaryCards({ transactionList }) {
    const incomeItems = transactionList?.filter(
        (transaction) => transaction.type === 'income',
    );

    const totalIncome = incomeItems.reduce(
        (acc, transaction) => acc + transaction.value,
        0,
    );

    const expenseItems = transactionList?.filter(
        (transaction) => transaction.type === 'expense',
    );

    const totalExpense = expenseItems.reduce(
        (acc, transaction) => acc + transaction.value,
        0,
    );

    const totalBalanceMov = transactionList.reduce(
        (acc, transaction) => acc + transaction.value,

        0,
    );

    const incomePercent = totalBalanceMov
        ? (totalIncome / totalBalanceMov) * 100
        : 0;
    const expensePercent = totalBalanceMov
        ? (totalExpense / totalBalanceMov) * 100
        : 0;

    return (
        <section className="container summary-container">
            {incomeItems.length > 0 || expenseItems.length > 0 ? (
                <>
                    <Chart transactionList={transactionList} />

                    <div className="income-expense-container">
                        <div>
                            <div className="title-summary-container">
                                <i className="square-legend s-p" />
                                <h3>Receitas</h3>
                            </div>
                            <p className="summary-value positive">
                                R$ +{convertValueToBRLString(totalIncome)} (
                                {`${incomePercent.toFixed(1)}%`})
                            </p>
                        </div>
                        <div>
                            <div className="title-summary-container">
                                <i className="square-legend s-n" />
                                <h3>Despesas</h3>
                            </div>
                            <p className="summary-value negative">
                                R$ -{convertValueToBRLString(totalExpense)} (
                                {`${expensePercent.toFixed(1)}%`})
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <p className="no-transaction-msg">
                    Comece a organizar suas finanças agora.
                </p>
            )}
        </section>
    );
}

export default SummaryCards;
