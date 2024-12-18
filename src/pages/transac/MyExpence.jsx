import React from 'react'
import ReactApexChart from 'react-apexcharts';

const MyExpence = () => {
    const series = [{
        name: 'Inflation',
        data: [1.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }]
    const options = {
        chart: {
            height: '100%',
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 12,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },

        xaxis: {
            categories: ["Jan", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }

        },
        title: {
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    }



    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={219} />
        </div>
    )
}

export default MyExpence
