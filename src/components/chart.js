import QuickChart from "quickchart-js";
import React, {useState} from 'react'



export default function Chart({xData, yData}){

    const [chartURL, setChartURL] = useState('')

    function makeChart({xData}, {yData}){
        const chart = new QuickChart();
    
        chart.setWidth(300)
        chart.setHeight(300);
    
        chart.setConfig({
        type: 'line',
        data: {
            labels: {xData}, // labels = x axis
            datasets: [{
                data: {yData}, // data = y axis
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
    
    makeChart()

return(

 
    chartURL

        
)

}

