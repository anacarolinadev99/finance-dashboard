import React from 'react';
import Button from './Button';

function ConfirmAction({
    transactionSelected,
    deleteItem,
    clearActionAndTransactionSelected = () => {},
}) {
    //Deleta o item após a confirmação
    const handleClick = () => {
        deleteItem(transactionSelected.id);
        clearActionAndTransactionSelected();
    };

    return (
        <div>
            <h3>Confirmar exclusão</h3>
            <p>
                Deseja mesmo apagar este item (
                {`${transactionSelected.description}`})? (Ação irreversível)
            </p>
            <Button label={'Confirmar'} onClick={handleClick} />
            <Button
                label={'Cancelar'}
                onClick={clearActionAndTransactionSelected}
            />
        </div>
    );
}

export default ConfirmAction;
