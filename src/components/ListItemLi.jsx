import React from 'react';
import { convertCentsToBRL } from '../utils/financeUtils';
import Button from './Button';

function ListItemLi({
    transactionItem,
    forList = 'summary',
    selectTransaction = () => {},
    actionSelected = () => {},
}) {
    const text = `${transactionItem?.type === 'income' ? '+' : '-'}${convertCentsToBRL(transactionItem.value)}`;

    return (
        <li>
            {forList === 'summary' ? (
                text
            ) : (
                <>
                    <span>{transactionItem?.description}</span>
                    <span>{text}</span>
                    <div>
                        <>
                            <Button
                                label={'Editar'}
                                onClick={() => {
                                    selectTransaction(transactionItem);
                                    actionSelected({
                                        edit: true,
                                        delete: false,
                                        none: false,
                                    });
                                }}
                            />
                            <Button
                                label={'Deletar'}
                                onClick={() => {
                                    selectTransaction(transactionItem);
                                    actionSelected({
                                        edit: false,
                                        delete: true,
                                        none: false,
                                    });
                                }}
                            />
                        </>
                    </div>
                </>
            )}
        </li>
    );
}

export default ListItemLi;
