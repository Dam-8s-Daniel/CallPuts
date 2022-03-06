import React from 'react';
import Investment from './Investment';


function InvestmentList({ investments, onDelete, onEdit }) {
    return (
        <table id="Investments-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Ticker</th>
                    <th>Initial Price</th>
                    <th>Amount</th>
                    <th>Start Balance</th>
                    <th>End Balance</th>
                </tr>
            </thead>
            <tbody>
                {investments.map((investment, i) => 
                    <Investment investment={investment} 
                              onDelete={onDelete}
                              onEdit={onEdit}
                              key={i} 
                    />)
                }
            </tbody>
        </table>
    );
}

export default InvestmentList;