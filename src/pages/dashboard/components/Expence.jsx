import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Expence = () => {
    const series = [30, 15, 35, 20,]
    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D',],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" />
        </div>
    )
}

export default Expence



