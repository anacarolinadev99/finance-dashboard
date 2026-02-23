import React from 'react';
import ListItemLi from './ListItemLi';

function SummaryCards({ transactionList }) {
    const incomeItems = transactionList?.filter(
        (transaction) => transaction.type === 'income',
    );
    const expenseItems = transactionList?.filter(
        (transaction) => transaction.type === 'expense',
    );
    return (
        <section className="summary">
            {incomeItems.length > 0 || expenseItems.length > 0 ? (
                <>
                    <div>
                        <h3>Receitas</h3>
                        <ul className="list-summary list-income">
                            {incomeItems &&
                                incomeItems.map((transaction) => (
                                    <ListItemLi
                                        key={transaction.id}
                                        transactionItem={transaction}
                                    />
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Despesas</h3>
                        <ul className="list-summary list-expense">
                            {expenseItems &&
                                expenseItems.map((transaction) => (
                                    <ListItemLi
                                        key={transaction.id}
                                        transactionItem={transaction}
                                    />
                                ))}
                        </ul>
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
