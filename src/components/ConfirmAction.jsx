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
        <div className="confirm-container">
            <div className="confirm">
                <h3>Confirmar exclusão</h3>
                <p>
                    Deseja mesmo apagar este item (
                    {`${transactionSelected.description}`})? (Ação irreversível)
                </p>
                <div>
                    <Button
                        className="btn btn-delete btn-confirm-delete"
                        label={'Confirmar'}
                        onClick={handleClick}
                    />
                    <Button
                        className="btn btn-add"
                        label={'Cancelar'}
                        onClick={clearActionAndTransactionSelected}
                    />
                </div>
            </div>
        </div>
    );
}

export default ConfirmAction;
