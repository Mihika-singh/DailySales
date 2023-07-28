import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
const BarChart = ({ labels, lastYearData, thisYearData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Last Year',
            data: lastYearData,
            backgroundColor: '#A7ECEE',

            borderRadius: 30,


          },
          {
            label: 'This Year',
            data: thisYearData,
            backgroundColor: '#0079FF',

            borderRadius: 20,


          },
        ],
      },
      options: {

        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            }

          },
          x: {
            beginAtZero: true,
            max: 50000,
            stepSize: 5000,
            gridLines: {
              display: false
            }
          },
        },
        legend: {
          position: "bottom",
          boxWidth: 10,
          labels: {
            boxWidth: 10,
            borderRadius: 20
          }
        }
      },
    });

    chartInstanceRef.current = newChartInstance;
  }, [labels, lastYearData, thisYearData]);

  return (
    < div style={{ width: window.innerWidth > 600 ? '620px' : '330px', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Grid lg="11"><h4 style={{ color: 'black', textAlign: 'left' }}>Comparison</h4></Grid>
        <Grid lg="2" style={{ marginLeft: window.innerWidth < 600 && '15%' }}>
          <span style={{
            width: '100px',
            borderRadius: '20px',
            padding: '1px',
            fontSize: '12px',
            marginLeft: '5px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'grey',
            border: '2px solid grey',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',

          }}>
            6 months <span style={{ textAlign: 'center' }}><ExpandMoreIcon /></span>
          </span>
        </Grid></div>
      <canvas ref={chartRef} ></canvas></div>);
};

export default BarChart;


