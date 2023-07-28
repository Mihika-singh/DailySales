import React, { useEffect, useRef ,useState} from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import Typography from '@mui/material/Typography';
const CustomersChart = () => {
  useEffect(() => {
    authenticate();
  }, []);

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Web sales',
            data: [800, 8000, 4500 , 5800, 6900,0 ],
            borderColor: '#0079FF',  
            
            fill: false,  
           
          },
          {
            label: 'Offline selling',
            data: [500, 4400, 4100 , 5400, 6500,0 ],
            borderColor: '#A7ECEE',  
            fill: false,
          
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,          
          },
          x: {
            beginAtZero: true, 
            max: 8000, 
            stepSize: 4000, 
            autoSkip: true, 
            maxTicksLimit: 10,
            
          },
        },
        legend: {
          position: 'bottom',
          boxWidth: 10,          
          labels: {
            boxWidth: 10,
            borderRadius: 20,
          },
        },
      },
    });

    chartInstanceRef.current = newChartInstance; 
  }, []);
  const [dataObject, setDataObject] = useState(null);
  const authenticate = async () => {
    const username = 'trial';
    const password = 'assignment123';

    try {
      const response = await axios.post(
        'http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_4/',
        null,
        {
          auth: {
            username,
            password,
          },
        }
      );
      const dataObject = JSON.parse(response?.data);
      setDataObject(dataObject);
      console.log(dataObject);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
  console.log('customer',dataObject);
  return (
    <div style={{ color: 'black', width: '100%', height: '100%'   }}>
      <h3 style={{textAlign:'left'}}>Customers by device</h3>
      <canvas ref={chartRef} height={300}></canvas>
      <div style={{ display: 'flex',  gap:'70px', alignItems: 'center', textAlign: 'left',marginLeft:'18%' }}>
        {dataObject &&
          Object.keys(dataObject)
            .splice(0, 3)
            .map((key, index) => (
              <>
                <div>
                  <Typography variant="body2" style={{ fontWeight:'bold' }}>
                    {dataObject[key]}%
                  </Typography>
                </div>
              </>
            ))}
      </div>
    </div>
  );
};

export default CustomersChart;
