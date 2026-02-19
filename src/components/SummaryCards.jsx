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
        <section>
            <div>
                <h3>Receitas</h3>
                <ul>
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
                <ul>
                    {expenseItems &&
                        expenseItems.map((transaction) => (
                            <ListItemLi
                                key={transaction.id}
                                transactionItem={transaction}
                            />
                        ))}
                </ul>
            </div>
        </section>
    );
}

export default SummaryCards;
