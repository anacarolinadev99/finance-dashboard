import React from 'react';
import Input from './Input';

function Filter({ setFilterSelected, filterSelected }) {
    return (
        <div className="container-filter">
            <div>
                <Input
                    type="radio"
                    name="filter"
                    id="filter-all"
                    checked={filterSelected === 'all' ? true : false}
                    onChange={() => setFilterSelected('all')}
                />
                <label htmlFor="filter-all">Todos</label>
            </div>
            <div>
                <Input
                    type="radio"
                    name="filter"
                    id="filter-income"
                    onChange={() => setFilterSelected('income')}
                    checked={filterSelected === 'income' ? true : false}
                />
                <label htmlFor="filter-income">Receitas</label>
            </div>
            <div>
                <Input
                    type="radio"
                    name="filter"
                    id="filter-expense"
                    onChange={() => setFilterSelected('expense')}
                    checked={filterSelected === 'expense' ? true : false}
                />
                <label htmlFor="filter-expense">Despesas</label>
            </div>
        </div>
    );
}

export default Filter;
