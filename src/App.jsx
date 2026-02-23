import React, { useState } from 'react';
import BalanceCard from './components/BalanceCard';
import SummaryCards from './components/SummaryCards';
import Button from './components/Button';
import TransactionsCard from './components/TransactionsCard';
import AddEditTransactionInterface from './components/AddEditTransactionInterface';
import { useFinance } from './hooks/useFinance';

export function App() {
    const {
        dataFinances,
        addTransaction,
        updateTransaction,
        deleteTransaction,
    } = useFinance();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header>
                <h1 data-text="Gerenciador Financeiro">
                    Gerenciador Financeiro
                </h1>
            </header>
            <div className="container">
                <BalanceCard transactionList={dataFinances} />
            </div>
            <div className="container summary-container">
                <SummaryCards transactionList={dataFinances} />

                <Button
                    label={'Nova Transação'}
                    className="btn btn-add"
                    onClick={() => setIsMenuOpen(true)}
                />

                {isMenuOpen && (
                    <AddEditTransactionInterface
                        closeInterface={() => setIsMenuOpen(false)}
                        addTransaction={addTransaction}
                    />
                )}
            </div>

            {dataFinances.length > 0 ? (
                <div className="container">
                    <TransactionsCard
                        transactionList={dataFinances}
                        updateTransaction={updateTransaction}
                        deleteTransaction={deleteTransaction}
                    />
                </div>
            ) : null}
        </>
    );
}
