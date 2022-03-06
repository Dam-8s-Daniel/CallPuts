import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddInvestmentPage = () => {

    const [date, setDate] = useState('');
    const [ticker, setTicker] = useState('');
    const [buyPrice, setBuyPrice] = useState(0);
    const [amount, setAmount] = useState(0);

    
    const API_KEY = '2U8R2EBSI83M75SO';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
    

    const navigate = useNavigate();

    const addInvestment = async () => {
        const newInvestment = {date, ticker, buyPrice, amount};
        const response = await fetch('/portfolio', {
            method: 'POST',
            body: JSON.stringify(newInvestment),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(response.status === 201){
            alert('Sucessfully added the investment');
        }else{
            alert(`Failed to add exercise. All fields must be filled or have the correct ticker. Status code = ${response.status}`);
            navigate("/add-investment");
        }
        navigate("/portfolio");
    };

    return (
        <div>
            <h1>Add Investment</h1>
            <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                value={ticker}
                placeholder="Ticker"
                onChange={e => setTicker(e.target.value)} />
            <input
                type="number"
                value={buyPrice}
                placeholder="Enter price that stock was bought at"
                onChange={e => setBuyPrice(e.target.value)} />
            <input
                type="number"
                value={amount}
                placeholder="Enter how many stocks were bought"
                onChange={e => setAmount(e.target.value)} />
            <button
                onClick={addInvestment}
            >Add</button>
        </div>
        
    );
}

export default AddInvestmentPage;