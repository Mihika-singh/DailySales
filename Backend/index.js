const express = require('express');
 const con=require('./config');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    con.query('SELECT * FROM chart', (err, results) => {
        if (err) {
          console.error('Error executing the query:', err);
          res.status(500).json({ error: 'Error fetching data from the database' });
        } else {
          res.json(results);
        }
      });
    });
    app.get("/mobiles",(req,res)=>{
        con.query('SELECT * FROM MobilePhones', (err, results) => {
            if (err) {
              console.error('Error executing the query:', err);
              res.status(500).json({ error: 'Error fetching data from the database' });
            } else {
              res.json(results);
            }
          });
        });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
