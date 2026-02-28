import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { convertValueToBRLString } from '../utils/financeUtils';

ChartJS.register(ArcElement);

function Chart({ transactionList }) {
    const totalBalance = transactionList?.reduce((acc, transaction) => {
        if (transaction.type === 'income') return acc + transaction.value;
        if (transaction.type === 'expense') return acc - transaction.value;
        return acc;
    }, 0);

    const incomeTotal = transactionList
        .filter((e) => e.type === 'income')
        .reduce((acc, e) => acc + e.value, 0);

    const expenseTotal = transactionList
        .filter((e) => e.type === 'expense')
        .reduce((acc, e) => acc + e.value, 0);

    const data = {
        labels: ['Receita', 'Despesa'],
        datasets: [
            {
                data: [incomeTotal, expenseTotal],
                backgroundColor: ['#7aff97', '#ff6060'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '65%',
    };

    return (
        <div className="chart-container-wrap">
            <Pie data={data} options={options} />
            <div className="balance-donut">
                <h3 className={totalBalance >= 0 ? 'positive' : 'negative'}>
                    R$ {convertValueToBRLString(totalBalance)}
                </h3>
                <p>Saldo</p>
            </div>
        </div>
    );
}

export default Chart;
