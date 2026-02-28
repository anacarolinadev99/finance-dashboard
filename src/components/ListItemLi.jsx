import React, { useState } from 'react';
import { convertValueToBRLString } from '../utils/financeUtils';
import Button from './Button';

function ListItemLi({
    transactionItem,
    selectTransaction = () => {},
    actionSelected = () => {},
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const text = `${transactionItem?.type === 'income' ? '+' : '-'}${convertValueToBRLString(transactionItem.value)}`;
    const dateList = transactionItem?.date.split('-') || null;
    const dateFormataded =
        dateList !== null
            ? [dateList[2], dateList[1], dateList[0]].join('/')
            : '-';

    return (
        <li>
            <>
                <div className="trancation-value">
                    <span>{transactionItem?.description}</span>
                    <span>{dateFormataded}</span>
                    <span
                        className={
                            transactionItem?.type === 'income'
                                ? 'positive'
                                : 'negative'
                        }
                    >
                        {text}
                    </span>
                </div>

                <div
                    className={`btn-container ${!isMenuOpen ? 'hide-mobile' : null}`}
                >
                    <Button
                        label={'Editar'}
                        className="btn btn-update"
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
                        label={'Apagar'}
                        className="btn btn-delete"
                        onClick={() => {
                            selectTransaction(transactionItem);
                            actionSelected({
                                edit: false,
                                delete: true,
                                none: false,
                            });
                        }}
                    />
                </div>

                <Button
                    className="btn-menu mobile"
                    label={isMenuOpen ? '˄' : '˅'}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </>
        </li>
    );
}

export default ListItemLi;
