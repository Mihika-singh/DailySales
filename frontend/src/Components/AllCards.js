import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Component1 from './Component1';
import ImproveScore from './ImproveScore';
import YearChart from './YearChart';
import TopProducts from './TopProducts';
import CustomersChart from './CustomersChart';
import ComponentFeedback from './CommunityFeedback';

function AllCards() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Card sx={{ width: '100%', borderRadius: '20px', padding: '10px' }}>
          <CardContent>
            <Typography variant="body2" style={{ color: 'grey' }}>
              <Component1 />
              <YearChart /><br></br>
              <TopProducts />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ width: '100%', borderRadius: '20px', padding: '10px' }}>
              <CardContent>
                <Typography variant="body2" style={{ color: 'grey' }}>
                  <ImproveScore />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ width: '100%', borderRadius: '20px', padding: '10px' }}>
              <CardContent>
                <Typography variant="body2" style={{ color: 'grey' }}>
                  <CustomersChart />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ width: '100%', borderRadius: '20px', padding: '10px' }}>
              <CardContent>
                <Typography variant="body2" style={{ color: 'grey' }}>
                  <ComponentFeedback />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default AllCards;
