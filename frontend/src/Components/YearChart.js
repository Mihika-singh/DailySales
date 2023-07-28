import React from "react";
import { useEffect, useState } from "react";
import BarChart from './BarChart'
const YearChart = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const getTable = async () => {
         const res = await fetch('http://localhost:3001/');
         const getData = await res.json();
         setData(getData);
         console.log(getData);
      }
      getTable()
   }, []);

   console.log('data', data)
   const labels = data.map((item) => item.month);
   const lastYearData = data.map((item) => item.last_year);
   const thisYearData = data.map((item) => item.this_year);
   console.log('labels', labels, lastYearData, thisYearData);

   return (
      <div style={{ marginLeft: window.innerWidth > 600 && "220px" }}>

         <BarChart labels={labels} lastYearData={lastYearData} thisYearData={thisYearData} />
      </div>
   )
}
export default YearChart;