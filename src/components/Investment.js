import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md';
import { useState, useEffect } from 'react';

/**
 * Returns string date in the format MM-DD-YYYY
 */
 function date_parser(req_date){
    let val = new Date(req_date);
    
    let date = val.getDate();
    let stringDate = date.toString();
    
    let month = val.getMonth() + 1;
    let stringMonth = month.toString();

    if (stringMonth.length === 1){
      stringMonth = "0" + stringMonth
    }

    if (stringDate.length === 1){
        stringDate = "0" + stringDate
      }

    let year = val.getFullYear();
    let stringYear = year.toString();

    return stringMonth +  "-" + stringDate + "-" + stringYear 
}

function Investment({ investment, onDelete, onEdit }) {
    

    const [newBalance, setNewBalance] = useState(0)
    const [startBalance, setStartBalance] = useState(0)
 

    const API_KEY = '2U8R2EBSI83M75SO';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${investment.ticker}&apikey=${API_KEY}`;
    
    const getBalance = () =>{ 
            fetch(API_Call)
            .then(res => res.json())
            .then(data =>{
                let arrDates = Object.keys(data['Time Series (Daily)']);
                let lastClosingDate = arrDates[0]
                let lastClose = data['Time Series (Daily)'][lastClosingDate]['4. close']
                let New_Balance = lastClose * investment.amount;
                setNewBalance(New_Balance.toFixed(2))
                })

            setStartBalance(investment.buyPrice * investment.amount)
            }
    
    useEffect( () => {
        getBalance();
    }, [newBalance, startBalance]);

    return (
        <tr>
            <td>{date_parser(investment.date)}</td>
            <td>{investment.ticker}</td>
            <td>${investment.buyPrice}</td>
            <td>{investment.amount}</td>
            <td>${startBalance}</td>
            <td>${newBalance}</td>
            <td><MdDeleteForever onClick={() => onDelete(investment._id)}/>
            </td>
        </tr>
    );
}

export default Investment;