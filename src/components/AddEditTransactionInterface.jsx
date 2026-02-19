import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import {
    validateValue,
    convertToCents,
    convertCentsToBRL,
    validateForm,
} from '../utils/financeUtils';

function AddEditTransactionInterface({
    closeInterface,
    addTransaction,
    updateTransaction,
    typeFormSelected = 'add',
    transactionItem = null,
    clearActionAndTransactionSelected = () => {},
}) {
    //Controle os campos do form
    const [formInputs, setFormInputs] = useState({
        date: typeFormSelected === 'add' ? '' : transactionItem.date,
        description:
            typeFormSelected === 'add' ? '' : transactionItem.description,
        type: typeFormSelected === 'add' ? '' : transactionItem.type,
        value:
            typeFormSelected === 'add'
                ? '0'
                : convertCentsToBRL(transactionItem.value),
    });

    //Armazena as mensagens de erro
    const [errors, setErrors] = useState({
        description: null,
        date: null,
        type: null,
        value: null,
    });

    //Limpa o formulário
    const cleanForm = () => {
        setFormInputs({ description: '', date: '', type: '', value: '0' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Avalia novemante se há erros se caso o usuário não clicou no campo
        const newErrors = {
            description: validateForm(formInputs.description, 'description'),
            date: validateForm(formInputs.date, 'date'),
            type: validateForm(formInputs.type, 'type'),
            value: validateForm(validateValue(formInputs.value), 'value'),
        };
        setErrors(newErrors);

        //Retorna se á algum erro
        if (Object.values(newErrors).some((e) => e)) return;

        if (typeFormSelected === 'add') {
            //Salva ou atualiza uma transação
            addTransaction(
                formInputs.date,
                formInputs.description,
                formInputs.type,
                convertToCents(validateValue(formInputs.value)),
            );
        } else {
            updateTransaction(
                transactionItem.id,
                formInputs.date,
                formInputs.description,
                formInputs.type,
                convertToCents(validateValue(formInputs.value)),
            );

            clearActionAndTransactionSelected();
        }

        cleanForm();
        closeInterface();
    };

    return (
        <section>
            <h2>
                {typeFormSelected === 'add'
                    ? 'Nova Transação'
                    : 'Editar Transação'}
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <Input
                        id={'description'}
                        value={formInputs.description}
                        onChange={(e) =>
                            setFormInputs((prev) => ({
                                ...prev,
                                description: e.target.value,
                            }))
                        }
                        onBlur={(e) =>
                            setErrors((prev) => ({
                                ...prev,
                                description: validateForm(
                                    e.target.value,
                                    'description',
                                ),
                            }))
                        }
                    />
                    {errors.description && <span>{errors.description}</span>}
                </div>

                <div>
                    <label htmlFor="date">Data</label>
                    <input
                        id="date"
                        type="date"
                        value={formInputs.date}
                        onChange={(e) =>
                            setFormInputs((prev) => ({
                                ...prev,
                                date: e.target.value,
                            }))
                        }
                        onBlur={(e) =>
                            setErrors((prev) => ({
                                ...prev,
                                date: validateForm(e.target.value, 'date'),
                            }))
                        }
                    />
                    {errors.date && <span>{errors.date}</span>}
                </div>

                <div>
                    <label htmlFor="type">Tipo</label>
                    <select
                        name="type"
                        id="type"
                        value={formInputs.type}
                        onChange={(e) =>
                            setFormInputs((prev) => ({
                                ...prev,
                                type: e.target.value,
                            }))
                        }
                        onBlur={(e) =>
                            setErrors((prev) => ({
                                ...prev,
                                type: validateForm(e.target.value, 'type'),
                            }))
                        }
                    >
                        <option value="" disabled>
                            Selecione um tipo
                        </option>
                        <option value="income">Receita</option>
                        <option value="expense">Despesa</option>
                    </select>
                    {errors.type && <span>{errors.type}</span>}
                </div>

                <div>
                    <label htmlFor="value">Valor</label>
                    <Input
                        id={'value'}
                        value={formInputs.value}
                        onChange={(e) =>
                            setFormInputs((prev) => ({
                                ...prev,
                                value: e.target.value,
                            }))
                        }
                        onBlur={(e) =>
                            setErrors((prev) => ({
                                ...prev,
                                value: validateForm(
                                    validateValue(e.target.value),
                                    'value',
                                ),
                            }))
                        }
                    />
                </div>

                <div>
                    <Button
                        label={
                            typeFormSelected === 'add'
                                ? 'Adicionar'
                                : 'Salvar Alterações'
                        }
                        type="submit"
                    />
                    <Button
                        label={'Cancelar'}
                        onClick={() => {
                            cleanForm();
                            closeInterface();
                        }}
                    />
                </div>
            </form>
        </section>
    );
}

export default AddEditTransactionInterface;
