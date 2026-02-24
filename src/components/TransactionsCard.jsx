import React, { useEffect, useState } from 'react';
import ListItemLi from './ListItemLi';
import AddEditTransactionInterface from './AddEditTransactionInterface';
import ConfirmAction from './ConfirmAction';
import Input from './Input';
import Filter from './Filter';

function TransactionsCard({
    transactionList,
    updateTransaction,
    deleteTransaction,
}) {
    //Monitora a transação selecionada
    const [transactionSelected, setTransactionSelected] = useState({});

    //Estado inicial do acctionSelected
    const actionInitial = { edit: false, delete: false, none: true };

    //Monitora o tipo de ação
    const [actionSelected, setActionSelected] = useState(actionInitial);

    const clearActionAndTransactionSelected = () => {
        setTransactionSelected({});
        setActionSelected(actionInitial);
    };

    const [filteredList, setFilteredList] = useState(transactionList);
    const [filterSelected, setFilterSelected] = useState('all');

    useEffect(() => {
        if (filterSelected === 'income')
            return setFilteredList(
                transactionList.filter(
                    (transaction) => transaction.type === 'income',
                ),
            );
        if (filterSelected === 'expense')
            return setFilteredList(
                transactionList.filter(
                    (transaction) => transaction.type === 'expense',
                ),
            );
        setFilteredList(transactionList);
    }, [filterSelected]);

    //Transformar o filter em componente
    //Usar o componente input(arrumar)
    //Arrumar o css

    return (
        <section>
            <h2>Transações</h2>
            <Filter
                setFilterSelected={setFilterSelected}
                filterSelected={filterSelected}
            />
            <ul className="transactionsList">
                {transactionList &&
                    filteredList.map((transaction) => (
                        <ListItemLi
                            key={transaction.id}
                            transactionItem={transaction}
                            forList="transactionCard"
                            selectTransaction={setTransactionSelected}
                            actionSelected={setActionSelected}
                        />
                    ))}
            </ul>
            {actionSelected.edit && (
                <AddEditTransactionInterface
                    closeInterface={() => setActionSelected(actionInitial)}
                    updateTransaction={updateTransaction}
                    typeFormSelected="edit"
                    transactionItem={transactionSelected}
                    clearActionAndTransactionSelected={() =>
                        clearActionAndTransactionSelected()
                    }
                />
            )}
            {actionSelected.delete && (
                <ConfirmAction
                    transactionSelected={transactionSelected}
                    deleteItem={deleteTransaction}
                    clearActionAndTransactionSelected={() =>
                        clearActionAndTransactionSelected()
                    }
                />
            )}
        </section>
    );
}

export default TransactionsCard;
