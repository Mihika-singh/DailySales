import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
const ComponentFeedback = () => {
  const [dataObject, setDataObject] = useState(null);

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const username = 'trial';
    const password = 'assignment123';

    try {
      const response = await axios.post(
        'http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_5/',
        null,
        {
          auth: {
            username,
            password,
          },
        }
      );
      const dataObject = JSON.parse(response.data);
      setDataObject(dataObject);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  console.log('dataObject:', dataObject);
  console.log('customer', dataObject?.remark);

  return (
    <div>
      <div style={{ color: 'grey',textAlign:'left' }}>Community feedback</div>
      <h2 style={{ color: 'black', margin: 0 ,textAlign:'left'}}>{dataObject?.remark}</h2>   <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
        {dataObject &&
          Object.keys(dataObject)
            .splice(0, 3)
            .map((key, index) => (
              <>
                <Typography variant="body2" style={{ color: 'grey' }}>
                  {key === "neutral" ?
                    <div style={{ width: "40px", backgroundColor: 'lightpink', borderRadius: '20px', padding: '5px', }}>
                    </div> : key === "negative" ?
                      <div style={{ width: "54px", backgroundColor: ' yellow', borderRadius: '20px', padding: '5px', }}>
                      </div> : key === "positive" ?
                        <div style={{ width: "134px", backgroundColor: 'green', borderRadius: '20px', padding: '5px', }}>
                        </div> : null}
                  <br></br> {key}
                </Typography>
              </>
            ))}
      </div>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', textAlign: 'left' }}>
        {dataObject &&
          Object.keys(dataObject)
            .splice(0, 3)
            .map((key, index) => (
              <>
                <div>
                  <Typography variant="body2" style={{ color: 'grey', fontWeight: 'bold' }}>
                    {dataObject[key]}
                  </Typography>
                </div>
              </>
            ))}
      </div>
    </div>
  );
};

export default ComponentFeedback;
