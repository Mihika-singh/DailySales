import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ImproveScore = () => {
  const [progress, setProgress] = useState(0);
  const [dataObject, setDataObject] = useState(null);
  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const username = 'trial';
    const password = 'assignment123';

    try {
      const response = await axios.post('http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_3/', null, {
        auth: {
          username,
          password,
        },
      });
      const dataObject = JSON.parse(response.data);
      setDataObject(dataObject);
      console.log(dataObject);
      setProgress(dataObject.score);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
  console.log('last cok', dataObject);
  return (
    <div style={{ color: 'black',textAlign:'left' }}>
      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
        {/* Progress bar */}
        <div className="progress-bar" style={{
          width: ' 200px',
          height: '10px',
          backgroundColor: ' #f2f2f2',
          borderRadius: '50px',
          overflow: 'hidden'
        }}>
          <div className="progress" style={{
            width: `${progress}%`, height: '100%',
            backgroundColor: '#4caf50',
            transition: ' width 0.5s ease-in-out'
          }}></div>
        </div>
        <br />
        <span>{`${progress}%`} of 100 points</span>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: 'lightgrey',
        }}
      />
      <br />
      <h3 style={{textAlign:'left'}}>{dataObject?.title}</h3>
      <div style={{ color: 'grey', fontWeight: 'bold',textAlign:'left' }}>{dataObject?.description}</div>
      <br />
      <br />
      <span
        style={{
          width: '160px',
          borderRadius: '20px',
          padding: '10px',
          fontSize: '12px',
          fontWeight: 'bold',
          textAlign: 'left',
          border: '2px solid grey',
        }}
      >
        Improve your score
      </span>
    </div>
  );
};

export default ImproveScore;
