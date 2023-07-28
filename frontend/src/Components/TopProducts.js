import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Grid  } from "@material-ui/core";
import PropTypes from 'prop-types';
import GradeIcon from '@material-ui/icons/Grade';

const styles = theme => ({
  table: {
    minWidth: '650px',
  },
});

const TopProducts = (props) => {
  const [data, setData] = useState([]);
  const { classes } = props;

  useEffect(() => {
    const getTable = async () => {
      const res = await fetch('http://localhost:3001/mobiles');
      const getData = await res.json();
      setData(getData);
      console.log(getData);
    }
    getTable()
  }, []);

  console.log('data', data)

  return (
    <div style={{ marginLeft: window.innerWidth > 600 && '220px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Grid lg="9"> <h4 style={{ color: 'black', textAlign: 'left', margin: 0, padding: 0 }}>
          Top Products</h4></Grid>
        <Grid lg="1" style={{ marginLeft: window.innerWidth < 600 && '15%' }}>
          <span style={{
            width: '100px',
            borderRadius: '20px',
            padding: '4px',
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
            Full results
          </span>
        </Grid>
      </div>
      <br></br>

      <Grid container lg={12} >
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <div style={{ maxHeight: window.innerWidth < 600 ? '500px' : 'none', overflow: window.innerWidth < 600 ? 'auto' : 'none' }}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <LeaderHead />

                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((post, id) => (
                  <TableRow
                    key={id + 1}

                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                      style={{ display: 'flex' }}

                    >
                      <span><PhoneAndroidIcon /></span>
                      <span style={{ fontWeight: 'bold' }}>
                        {post.Product}{" "}
                      </span>{" "}

                    </TableCell>
                    <TableCell align="left" className={classes.tableCell}>
                      {post.Sold_amount}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCell}>
                      {post.Unit_price}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCell}>
                      {post.Revenue}
                    </TableCell>
                    <TableCell align="left" className={classes.tableCell} style={{ display: 'flex' }}>
                      <span><GradeIcon style={{ color: "yellow" }} /></span>
                      <span>{post.rating}</span>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>

  )
}

TopProducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopProducts);

function LeaderHead() {
  const head = {
    'Products': { textAlign: 'left', color: 'grey', fontWeight: '500' },
    'Sold Amount': { textAlign: 'left', color: 'grey', fontWeight: '500' },
    'Unit Price': { textAlign: 'left', color: 'grey', fontWeight: '500' },
    'Revenue': { textAlign: 'left', color: 'grey', fontWeight: '500' },
    'Ratings': { textAlign: 'left', color: 'grey', fontWeight: '500' },

  };
  return (
    <>
      {Object.entries(head).map(([key, style]) => (

        <TableCell key={key} style={style}>{key}</TableCell>

      ))}
      <TableBody></TableBody>
    </>
  )
}
