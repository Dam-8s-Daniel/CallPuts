import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditPortfolioPage = ({investmentToEdit}) => {

    const [date, setDate] = useState('');
    const [ticker, setTicker] = useState('');
    const [buyPrice, setBuyPrice] = useState(0);
    const [amount, setAmount] = useState(0);


    const navigate = useNavigate();

    const API_KEY = '2U8R2EBSI83M75SO';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
    
    const editInvestment = async () => {
        let beginningBalance = buyPrice * amount;
        
        const check = fetch(API_Call)
        .then(res => res.json())
        .then(data =>{
                if ('Error Message' in data){
                    alert("Please enter a correct ticker or fill out form completely");
                    throw new Error('Please enter a correct symbol or amounts')
            }});
        
        
        const editedInvestment = {date, ticker, buyPrice, amount};
        const response = await fetch(`/portfolio/${investmentToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedInvestment),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(response.status === 200){
            alert('Sucessfully edited the exercise');
        }else{
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        navigate.push("/portfolio");
    };

    return (
        <div>
            <h1>Edit Investment</h1>
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                value={ticker}
                onChange={e => setTicker(e.target.value)} />
            <input
                type="number"
                value={buyPrice}
                onChange={e => setBuyPrice(e.target.value)} />
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <button
                onClick={editInvestment}
            >Save</button>
        </div>
    );
}

export default EditPortfolioPage;