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
        <div>
            <header>
                <h1>Gerenciador Financeiro</h1>
            </header>
            <BalanceCard transactionList={dataFinances} />

            <SummaryCards transactionList={dataFinances} />

            <Button
                label={'Nova Transação'}
                onClick={() => setIsMenuOpen(true)}
            />
            <TransactionsCard
                transactionList={dataFinances}
                updateTransaction={updateTransaction}
                deleteTransaction={deleteTransaction}
            />
            {isMenuOpen && (
                <AddEditTransactionInterface
                    closeInterface={() => setIsMenuOpen(false)}
                    addTransaction={addTransaction}
                />
            )}
        </div>
    );
}
