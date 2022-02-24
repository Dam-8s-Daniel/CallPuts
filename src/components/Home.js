import React from 'react';
import graph from '../graph.jfif'
import homepic from '../homeGraphPic.jpg'
export default function Home () {


    return (
        <div>
            <div>
            <img className='Welcome' src={homepic}></img>
            <p>Welcome to stock analyzer!</p>
            <p>Stocks: Enter the stock you bought, the price, and the amount to get how much your investment increased.</p>
            <p>Research: Enter the company name to get a summary of the company from Wikipedia or search for current news.</p>
            </div>
        </div>

    )
}