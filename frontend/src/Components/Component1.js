import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Component1 = () => {
  const [dataObject, setDataObject] = useState(null);

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const username = 'trial';
    const password = 'assignment123';

    try {
      const response = await axios.post('http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_1/', null, {
        auth: {
          username,
          password,
        },
      });
      const dataObject = JSON.parse(response.data);
      setDataObject(dataObject);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
  return (<><div style={{ display: 'flex', alignItems: 'center' }}><Grid lg="9" sm="6">
    <h2 style={{ marginLeft: window.innerWidth > 600 && '220px', color: 'black',textAlign:'left' }}>Dashboard</h2></Grid>
    <Grid lg="3" sm="6" container alignItems="center" style={{ marginRight: '8%', marginLeft: window.innerWidth < 600 && '10%' }} >
      <span style={{ color: 'grey', marginRight: '5px', fontSize: '15px', fontWeight: 'bold' }}>Compare to</span>
      <span style={{
        width: '100px',
        borderRadius: '20px',
        padding: '1px',
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey',
        border: '2px solid grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        Last Year <ExpandMoreIcon />
      </span>
    </Grid>

  </div><div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft: window.innerWidth > 600 && '25%' }}>

      {dataObject &&
        Object.keys(dataObject).map((key, index) => (
          <Card key={index} sx={{ width: window.innerWidth > 600 ? 200 : 400, borderRadius: '20px' }}>
            <CardContent>
              <Typography variant="body2" style={{ color: 'grey' }}>
                {key}
              </Typography>
              <Typography variant="h6" component="div" style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
                ${dataObject[key]}
                {key === "purchase" ? <span style={{ width: '20px', backgroundColor: 'lightgreen', borderRadius: '20px', padding: '5px', marginLeft: '5px', fontSize: '10px' }}>+32% <CallMissedOutgoingIcon style={{ fontSize: '10px' }} /></span>
                  : key === "revenue" ? <span style={{ width: '20px', backgroundColor: 'lightgreen', borderRadius: '20px', padding: '5px', marginLeft: '5px', fontSize: '10px' }}>+49% <CallMissedOutgoingIcon style={{ fontSize: '10px' }} /></span> :
                    key === "refunds" ? <span style={{ width: '20px', backgroundColor: 'lightpink', borderRadius: '20px', padding: '5px', marginLeft: '5px', fontSize: '10px' }}>+7% <CallReceivedIcon style={{ fontSize: '10px' }} /></span> : null}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div></>
  );
};

export default Component1;
