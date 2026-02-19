import { useEffect, useState } from 'react';

export const useFinance = () => {
    //Cria ou captura a lista de transações
    const [dataFinances, setDataFinances] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('dataFinances')) || [];
        } catch {
            return [];
        }
    });

    //Adiciona uma nova transação
    const addTransaction = (date, description, type, value) => {
        const newTransaction = {
            id: Date.now(),
            date,
            description,
            type,
            value,
        };
        setDataFinances((prev) => [...prev, newTransaction]);
    };

    //Atualiza uma transação já existente
    const updateTransaction = (id, date, description, type, value) => {
        setDataFinances((prev) =>
            prev.map((transaction) =>
                transaction.id === id
                    ? { ...transaction, date, description, type, value }
                    : transaction,
            ),
        );
    };

    //Apaga uma transação
    const deleteTransaction = (id) => {
        setDataFinances((prev) =>
            prev.filter((transaction) => transaction.id !== id),
        );
    };

    //Salva os dados sempre que há alteração
    useEffect(() => {
        localStorage.setItem('dataFinances', JSON.stringify(dataFinances));
    }, [dataFinances]);

    return {
        dataFinances,
        addTransaction,
        updateTransaction,
        deleteTransaction,
    };
};
