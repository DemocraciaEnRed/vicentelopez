import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

const data = {
    labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    datasets: [
        {
            data: [1178, 6691, 10068, 18880, 26537, 45010, 69201, 78310],
            borderColor: '#7cbb42',
            backgroundColor: '#ffffff',
            pointBackgroundColor:  '#7cbb42',	
        },
    ],
};

export default class LineChart extends Component {
    render() {
        const legendOptions = {
            display: false
        };
        const chartOptions = {
            defaultFontFamily: "'Open Sans', 'Arial', sans-serif",
            tooltips: {
                xPadding: 10,
                yPadding: 10,
                caretSize: 8,
                displayColors: false,
                titleFontSize: 0,
                bodyFontSize: 16,
                backgroundColor: 'transparent',
                bodyFontColor: '#882982',
                intersect: false,
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        drawTicks: true,
                        fontColor: '#000',
                        fontSize: 14
                    },
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    } ,
                    ticks: {
                        drawTicks: false,
                        fontColor: '#000',
                        min: 0
                    }, 
                }]
            }
        };
        return (
            <div>
                <Line data={data} legend={legendOptions} options={chartOptions}/>
            </div>
        );
    }
};