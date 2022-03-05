import React, {useState, useEffect} from 'react';
import QuickChart from 'quickchart-js';

function Stocks(){

    const [xData, setxData] = useState([])
    const [yData, setyData] = useState([])
    const [symbol, setSymbol] = useState('')
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState(0)
    const [lastClosingPrice, setLastClosingPrice] = useState('')
    const [newBalance, setNewBalance] = useState(0)
    const [prevBalance, setPreviousBalance] = useState(0)
    const [Message, setMessage] = useState(false)
    const [chartURL, setChartURL] = useState('')

    async function makeChart(){
        const chart = new QuickChart();
        chart.setWidth(500)
        chart.setHeight(300);
        chart.setConfig({
        type: 'line',
        data: {
            labels: xData, // labels = x axis
            datasets: [{
                data: yData, // data = y axis
                fill: false,
                borderColor: QuickChart.getGradientFillHelper('vertical', ['#eb3639', '#a336eb', '#36a2eb']),
                borderWidth: 5,
                pointRadius: 0,
            }]
        },
        options: {
            legend: {
            display: false
            },
            scales: {
            }
        }
        });
    
        const chartImageURL = chart.getUrl();
        console.log(chartImageURL)
        setChartURL(chartImageURL)
    }

    useEffect(() => {makeChart();
      }, [yData]);

    const API_KEY = '2U8R2EBSI83M75SO';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
    
    const stockPrices = async () => {
        const response = await fetch(API_Call)
            .then(res => res.json())
            .then(data =>{
                let arrDates = Object.keys(data['Time Series (Daily)']);
                // console.log(data['Time Series (Daily)']['2022-03-02']['4. close'])
                let arrClosePrices = []
                for (let h = 0; h < arrDates.length; h++){
                    arrClosePrices.push(data['Time Series (Daily)'][arrDates[h]]['4. close'])
                }
                console.log("close prices", arrClosePrices)
                console.log("dates", arrDates)
                let lastClosingDate = arrDates[0]
                console.log("last closing date:", lastClosingDate);
                //data['Time Series (Daily)']['YYYY-MM-DD']['4. close']
                let i = data['Time Series (Daily)'][lastClosingDate]['4. close']
                let m = parseFloat(i).toFixed(2)
                setLastClosingPrice(m)
                console.log("last closing price:", data['Time Series (Daily)'][lastClosingDate]['4. close'])
                let principal = price * amount
                setPreviousBalance(principal);
                let New_Balance = data['Time Series (Daily)'][lastClosingDate]['4. close'] * amount;
                console.log('new balance', New_Balance)
                setNewBalance(New_Balance.toFixed(2))
                setMessage(true)
                setxData(arrDates.reverse())
                setyData(arrClosePrices.reverse())
            } );
            
        if(response.status === 200){
            alert('Sucessful');
        }else{
            alert(`Failed, status code = ${response.status}`);
        }
    }

    const show_Balance =  
    (<div>
         <p>You bought {symbol} at ${price} for ${prevBalance}. {symbol} last closed at ${lastClosingPrice}. Your
            new balance is ${newBalance}.</p> 
            <div>
                <img src={chartURL}/>
            </div>
    </div>
    )

   

    return (
      <div>
        <h1>Price Over Last 20 Days</h1>
        <input
            type='text'
            placeholder='Stock Symbol'
            value={symbol}
            onChange={e => {setSymbol(e.target.value);
            setMessage(false)
            }}
             />
        <input
            type='number'
            placeholder='Buy Price'
           // value={price}
            onChange={e => setPrice(e.target.value)} />
        <input
            type='number'
            placeholder='Amount'
            //value={amount}
            onChange={e => setAmount(e.target.value)} />
        <button onClick={stockPrices}>
            Submit</button>
        <div>
            {Message && show_Balance}
        </div>
      </div>
    )
  }


export default Stocks;