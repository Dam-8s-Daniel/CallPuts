import React from 'react';
import robot from '../robotHi.png'
export default function Home () {

    return (
    <div className='Homepage'>
            <div className='WelcomeImg'><img src={robot}></img></div>
            <div className='WelcomeMessage'>
                <h1>Welcome to CallPuts!</h1>
                <p>Hi, I'm LIT (Liquidity Information Tracker). Let me show you around.</p>
                <p>
                    Charts: Get a chart of closing prices from the last 3 months. 
                    Enter the stock you bought, the price, and the amount to get how much your investment increased. 
                    Fast, easy, and reliable.
                </p>
                <p>
                    Research: The best place to search for top news. 
                    Enter the company name to get a summary of the company from Wikipedia or search for the top 
                    current news stories.
                </p>      
                <p>Contact: Send me a message if you have any questions or just want to say hi! </p>  
            </div>    
    </div>

    )
}