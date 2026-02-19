import React, { useState } from 'react';
import ListItemLi from './ListItemLi';
import AddEditTransactionInterface from './AddEditTransactionInterface';
import ConfirmAction from './ConfirmAction';

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

    return (
        <div>
            <h2>Transações</h2>
            <ul>
                {transactionList &&
                    transactionList.map((transaction) => (
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
        </div>
    );
}

export default TransactionsCard;
