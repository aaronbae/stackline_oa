import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart, 
  Line
} from 'recharts';

import { useSelector } from 'react-redux';
import { selectCurrProduct } from '../redux/productSlice';
import './chart.css';

export default function Chart(props) {
  const product = useSelector(selectCurrProduct);
  
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const string_to_month = dateString => {
    const splitted = dateString.split("-")
    return monthNames[parseInt(splitted[1]-1)]
  }
  return (
    <div className={props.className + " product-linechart-container"}>
      <p className="product-linechart-title">Retail Sales</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={product.sales}>
          <XAxis 
          dataKey="weekEnding"
          minTickGap={50}
          tickLine={false}
          tickFormatter={string_to_month}
          />
          <YAxis hide domain={['dataMin-1000000', 'dataMax+1000000']}/>
          <Line type="monotone" dataKey="retailSales" strokeWidth={4} dot={false} stroke="#346eeb" />
          <Line type="monotone" dataKey="wholesaleSales" strokeWidth={4} dot={false}  stroke="#565a63" />
        </LineChart>
      </ResponsiveContainer> 
    </div>  
  )
}